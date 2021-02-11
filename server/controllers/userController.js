const rescue = require('express-rescue');
const userModel = require('../models/userModel');

const getAll = rescue(async (_req, res, _next) => {
  const users = await userModel.getAll();
  res.status(200).json(users);
})

const getByEmail = rescue(async (req, res) => {
  const { email, password } = req.body;
  const validator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isValid = validator.test(String(email).toLowerCase());
  if(password.length < 7) return res.status(406).json(`Password must be at least 7 characters.`);
  if(!isValid) return res.status(406).json(`Email must be in "email@email.com" format.`);
  const user = await userModel.getByEmail(email, password);
  if(!user) return res.status(404).json(`User not found.`);
  res.status(200).json(user);
})

const create = rescue(async (req, res, _next) => {
  const { email, password } = req.body;
  const exists = await userModel.getByEmail(email, password);
  if(!exists) {
    const user = await userModel.create({ email, password });
    res.status(201).json(user);
  }
  res.status(422).json(`This user already exists.`);
})

module.exports = { create, getAll, getByEmail };
