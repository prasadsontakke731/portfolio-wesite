const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersMsg = require('./UserModel');
// const mongoDB = 'mongoDB://localhost:27017/portfolio';

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config({ path: './.env' });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  })
  .catch((err) => {
    console.log(`DataBase not connected : ${err}`);
  });

app.get('/', (req, res) => {
  res.send('Hello server is running without error');
});

// app.post('/', (req, res) => {
//   res.send({
//     name: 'Prasad',
//     email: 'prasadsontakke@1302',
//     message: 'Hello there',
//   });
// });

app.post('/user-message', async (req, res) => {
  const { name, email, message } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const user = new UsersMsg({ name, email, message });

  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  console.log(user);
  const userMessage = await user.save();

  console.log(userMessage);
  if (userMessage) {
    res.status(201).json({
      message: `Your Message Is successfully Send`,
    });
  }
});

app.get('/user-backend', async (req, res) => {
  const userMessages = await UsersMsg.find();
  console.log(userMessages);
  res.json(userMessages);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port number : ${process.env.PORT}`);
});
