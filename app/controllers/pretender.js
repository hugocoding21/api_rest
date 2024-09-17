const { where } = require("sequelize");
const Pretender = require("../models/Pretender");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class PretenderController {
  static async createOne(req, res, next) {
    try {
      const { email, password } = req.body;

      const pretender = await Pretender.findOne({
        where: { email },
      });

      if (pretender) {
        return res.status(400).json({ message: "Ce compte existe déjà" });
      }

      const newPretender = await Pretender.create({
        email,
        password,
      });

      return res.status(201).json(newPretender), next();
    } catch (error) {
      console.error(error);
      return res.status(500);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    const pretender = await Pretender.findOne({
      where: { email },
    });

    if (!pretender) return res.status(400).json({ message: "invalide" });

    const authValid = bcrypt.compareSync(password, pretender.password);
    if (!authValid) return res.status(400).json({ message: "mauvais email ou mot de passe" });

    const token = jwt.sign({ email: pretender.email }, process.env.JWT, { expiresIn: "1h" });

    const pretenderDTO = { ...pretender.dataValues, token };
    delete pretenderDTO.password;

    return res.status(200).json(pretenderDTO);
  }

  static async getAll(req, res) {
    try {
      const pretenders = await Pretender.findAll();
      return res.status(201).json(pretenders);
    } catch {
      return res.status(500);
    }
  }

  static async getOneById(req, res) {
    const { id } = req.params;
    try {
      const pretender = await Pretender.findByPk(id);

      if (pretender) {
        return res.status(200).json(pretender);
      } else {
        return res.status(404).json({ message: "le pretender n'exite pas" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500);
    }
  }

  static async updateOneById(req, res) {
    const { id } = req.params;
    const updates = req.body;

    try {
      const pretender = await Pretender.findByPk(id);

      if (!pretender) {
        return res.status(404).json({ message: "Pretender n'existe pas" });
      }

      await pretender.update(updates);

      return res.status(200).json(pretender);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
  static deleteOne(req, res) {}
}
module.exports = PretenderController;
