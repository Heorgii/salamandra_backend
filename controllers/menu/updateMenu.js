const { ValidationError } = require("../../helpers");
const { Menu } = require("../../models");
const { dataFilterObj } = require("../../helpers");

const updateMenu = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilterObj(req.body);
    const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateMenu;
