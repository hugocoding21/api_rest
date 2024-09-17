const { where } = require("sequelize");
const Pretender = require("../models/Pretender");

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

      return res.status(201).json(newPretender);
    } catch (error) {
      console.error(error);
      return res.status(500);
    }
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
    } catch {
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
