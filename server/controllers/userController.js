const rescue = require('express-rescue');
const userModel = require('../models/userModel');

const getAll = rescue(async (_req, res, _next) => {
  const users = await userModel.getAll();
  res.status(200).json(users);
})

const getByEmail = rescue(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.getByEmail(email, password);
  if(!user) return res.status(404).json(`User not found.`);
  res.status(200).json(user);
})

const create = rescue(async (req, res, _next) => {
  const { email, password } = req.body;
  const user = await userModel.create({ email, password });
  res.status(201).json(user);
})

module.exports = { create, getAll, getByEmail };
