var express = require('express');
const Users = require('../models/Users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('gets', async function(req, res) {
  let user = await Users.find();
  console.log(user);
  res.status(200).json({sms: "hii alll", user: user})
})

router.post('sign', async function(req, res){
  console.log(req.body);
  let createuser = await Users.create({
    name: req.body.name,
    sername: req.body.sername
  })
  if (createuser) {
    res.status(200).json({success: true})
  }
})

router.post('login', async function(req, res){
  let user = Users.findOne({name: req.body.name})
  res.status(200).json({mess: "you are hear", user: user})
})

module.exports = router;
