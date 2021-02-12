const { ObjectId } = require('mongodb');
const getCollection = require('./connection');

const getAll = async() => 
  getCollection('users')
    .then((db) => db.find({}).project({ _id: 0 }).toArray());

const getByEmail = async(email, password) => {
  return getCollection('users')
    .then((db) => db.findOne(
      { email: email, password: password },{ projection: { _id: 0 } }
    ));
}

const create = async ({ email, password }) => {
  const user = getCollection('users')
    .then((db) => db.insertOne({ email, password }));
  return { _id: user.insertedId, email, password };
}

const deleteByQuery = async (query) => {
  return getCollection('users').then((db) => 
    db.deleteMany({ email: new RegExp(query, 'i') }));
}

module.exports = { getAll, create, getByEmail, deleteByQuery };
