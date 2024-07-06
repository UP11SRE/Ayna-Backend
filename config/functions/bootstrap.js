'use strict';
const {
  findUser,
  createUser,
  userExists,
  findRegister,
  createRegister,
  findLogin,
} = require('./utils/database');

module.exports = () => {
  var io = require('socket.io')(strapi.server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

  io.on('connection', function (socket) {
    socket.on('join', async ({ username, room }, callback) => {
      console.log("user = ", username)
      try {
        const register = await findRegister(username);
        if (register) {
          const userExists = await findUser(username, room);

          if (userExists.length > 0) {
            callback(`User ${username} already exists in room no${room}. Please select a different name or room`);
          } else {
            const user = await createUser({
              username: username,
              room: room,
              status: "ONLINE",
              socketId: socket.id
            });

            if (user) {
              socket.join(user.room);
              socket.emit('welcome', {
                user: 'bot',
                text: `${user.username}, Welcome to room number ${user.room}.`,
                userData: user
              });
              io.to(user.room).emit('message', {
                user: 'bot',
                text: `${user.username} has joined`,
              });

            } else {
              callback(`user could not be created. Try again!`)
            }
          }
          callback();
        }
        callback();
      } catch (err) {
        console.log("Err occured, Try again!", err);
      }
    })

    socket.on('register', async ({ username, password }, callback) => {
      try {
        const userExists = await findRegister(username);
        if (userExists) {
          callback(`User "${username}" already registered.`);
          console.log("pooh, userExists = ", userExists)
        } else {
          const register = await createRegister({
            username: username,
            password: password,
            socketId: socket.id
          });

          if (register) {
            socket.emit('registered', {
              text: `"${register.username}" was registered successfully.`,
              userData: register
            });
          } else {
            callback(`user could not be created. Try again!`)
          }
        }
        callback();
      } catch (err) {
        console.log("Err occured, Try again!", err);
      }
    })

    socket.on('login', async ({ username, password }, callback) => {
      try {
        const register = await findLogin(username, password);
        console.log("register = ", register)

        if (register) {
          socket.emit('logedin', {
            text: `Loged in successfully.`,
            userData: register
          });
        } else {
          callback(`Please input valid user info.`);
        }
      } catch (err) {
        console.log("Err occured, Try again!", err);
      }
    })

    socket.on('sendMessage', async (data, callback) => {
      try {
        const user = await userExists(data.userId);
        if (user) {
          io.to(user.room).emit('message', {
            user: user.username,
            text: data.message,
          });
          io.to(user.room).emit('message', {
            user: 'bot',
            text: data.message,
          });
        } else {
          callback(`User doesn't exist in the database. Rejoin the chat`)
        }
        callback();
      } catch (err) {
        console.log("err inside catch block", err);
      }
    });
  });
};

