var express = require('express');
const Users = require('../models/Users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gets', function(req, res) {
  res.status(200).json({sms: "hii alll"})
})

router.post('/sign', async function(req, res){
  console.log(req.body);
  let createuser = await Users.create({
    name: req.body.name,
    sername: req.body.sername
  })
  if (createuser) {
    res.status(200).json({success: true})
  }
})

module.exports = router;
