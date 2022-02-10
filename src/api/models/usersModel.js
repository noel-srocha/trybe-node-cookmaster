const connection = require('./connectionMongoDB');

const createUser = async (name, email, password, role) => {
  const db = await connection();
  const result = await db.collection('users').insertOne({ name, email, password, role });
  return { name, email, role, _id: result.insertedId };
};

const findByEmail = async (email) => {
  const db = await connection();
  const result = await db.collection('users').findOne({ email });
  return result;
};

module.exports = {
  createUser,
  findByEmail,
};