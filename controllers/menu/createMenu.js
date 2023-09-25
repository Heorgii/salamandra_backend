const { ValidationError } = require('../../helpers');
const { Menu } = require('../../models');

const createMenu = async (req, res, next) => {
  const { body, file } = req;
  console.log('createMenu ~ body, file:', body, file);

  try {
    const fullData = { ...body, images: file?.path };
    const resUpdate = await Menu.create(fullData);
    console.log('createMenu ~ resUpdate:', resUpdate);

    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createMenu;
