async function findUser(username, room) {
  try {
    const userExists = await strapi.services.users.find({ username, room });
    return userExists;
  } catch (err) {
    console.log("error while fetching", err);
  }
}

async function userExists(id) {
  try {
    const user = strapi.services.users.findOne({ id: id });
    return user;
  } catch (err) {
    console.log("Error occured when fetching user", err);
  }
}

async function createUser({ username, room, status, socketId }) {
  try {
    const user = await strapi.services.users.create({
      username,
      room,
      status: status,
      socketId
    });
    return user;
  } catch (err) {
    console.log("User couldn't be created. Try again!")
  }
}

async function findRegister(username) {
  try {
    const userExists = await strapi.services.registers.findOne({ username });
    return userExists;
  } catch (err) {
    console.log("error while fetching", err);
  }
}

async function findLogin(username, password) {
  try {
    const register = await strapi.services.registers.findOne({ username, password });
    return register;
  } catch (err) {
    console.log("error while fetching", err);
  }
}

async function createRegister({ username, password, socketId }) {
  try {
    const register = await strapi.services.registers.create({
      username,
      password,
      socketId
    });
    return register;
  } catch (err) {
    console.log("Register couldn't be created. Try again!")
  }
}

module.exports = {
  findUser,
  createUser,
  userExists,
  findRegister,
  createRegister,
  findLogin
}
