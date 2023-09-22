const Joi = require("joi");
const mongoose = require("mongoose");

const menuValidationSchema = Joi.object({
  article: Joi.number().min(1).max(32).required(),
  product: Joi.string().min(3).max(32).required(),
  category: Joi.string().min(3).max(32).required(),
  name: Joi.string().min(3).max(32).required(),
  latin_name: Joi.string().min(3).max(32).required(),
  alcohol: Joi.array(),
  details: Joi.array(),
  price: Joi.number().min(1).max(32).required(),
  currency: Joi.string(),
  img: Joi.string().min(3).max(32),
  admin: Joi.string().min(3).max(32),
});

const MenuSchema = new mongoose.Schema(
  {
    article: {
      type: Number,
      unique: true,
      required: [true, "Set article of item"],
    },
    active: {
      type: Boolean,
      default: false,
    },
    product: {
      type: String,
      required: [true, "Set product of item"],
    },
    category: {
      type: String,
      required: [true, "Set category of item"],
    },
    productua: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Set name of item"],
    },
    latin_name: {
      type: String,
      required: [true, "Set latin_name of item"],
    },
    alcohol: {
      type: Array,
    },
    details: {
      type: Array,
    },
    price: {
      type: Number,
      required: [true, "Set price"],
    },
    currency: {
      type: String,
      default: "₴",
    },
    img: {
      type: String,
      default: "none",
    },
    admin: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Menu = mongoose.model("menu", MenuSchema);

module.exports = { Menu, menuValidationSchema };
