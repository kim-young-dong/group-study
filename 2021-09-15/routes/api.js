var express = require('express');
var router = express.Router();
var faker = require('faker');
var User = require('../models/user.schema.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('g')
});

router.get('/good', async function(req, res, next) {
  let users = await User.find();
  res.send(users);
});

router.get('/generate', async function(req, res, next) {
  let users = [];

  for(let i = 0; i < 10; i++) {
    let user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      avatar: faker.image.avatar()
    }
    users.push(user);
  }
  await User.insertMany(users);
  res.send(users);
});

router.get('/users', async function(req, res, next) {
  let users = await User.find().limit(10).sort({ createdAt: -1 });
  users = users.map((e) => {
    return `
    <div style = 'border:1px solid #000'>
      <img src = ${e.avatar}>
      <div style = 'display: inline-block'>
        name: ${e.name}<br>
        email: ${e.email}<br>
        phoneNumber: ${e.phoneNumber} 
        <br>id: ${e._id}
      </div>
    </div>`
  }).join(',');
  res.send(users);
});

router.get('/delete', async function(req, res, next) {
  await User.deleteMany();
  res.send();
});

// user 조회,수정,삭제

// 조회
router.get('/user/:id', async function(req, res, next) {

  let user = await User.findOne({ _id: req.params.id });
  user = 
  `<div style = 'border:1px solid #000'>
    <img src = ${user.avatar}>
    <div style = 'display: inline-block'>
    name: ${user.name}<br>
    email: ${user.email}<br>
    phoneNumber: ${user.phoneNumber}<br>
    id: ${user._id}</div>
  </div>`
  res.send(user);
});

// 수정
router.put('/user/:id', async function(req, res, next) {
  await User.updateOne({ _id: req.params.id },  req.body );
  let user = await User.findOne({ _id: req.params.id });
  res.send(user);
});

// 삭제 
router.delete('/user/:id', async function(req, res, next) {
  await User.deleteOne({ _id: req.params.id });
  let user = await User.findOne({ _id: req.params.id })  
  res.sendStatus(200);
});

module.exports = router;
