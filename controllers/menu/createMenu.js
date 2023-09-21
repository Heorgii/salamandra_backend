const { ValidationError } = require("../../helpers");
const { Menu } = require("../../models");

const createMenu = async (req, res, next) => {
  try {
    const fullData = { ...req.body};
    const resUpdate = await Menu.create(fullData);
    // console.log("resUpdate",resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createMenu;
