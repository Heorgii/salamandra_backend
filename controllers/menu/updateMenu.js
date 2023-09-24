const { ValidationError } = require('../../helpers');
const { Menu } = require('../../models');
const { dataFilterObj } = require('../../helpers');

const updateMenu = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  const file = req.file;

  const fullData = {
    ...body,
    images: file?.path,
  };
  console.log('updateMenu ~ fullData:', fullData);
  const newData = dataFilterObj(fullData);

  try {
    const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    // const resUpdate = await Menu.findByIdAndUpdate({ _id: id }, fullData, {
    //   new: true,
    // });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateMenu;
