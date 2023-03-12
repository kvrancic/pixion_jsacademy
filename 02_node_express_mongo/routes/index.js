var express = require('express');
var router = express.Router();

const Robot = require('../Robot.js');

/* GET home page. */
router.put('/', async function(req, res, next) {
  const newRobot = new Robot({name: 'Pixion2'});
  let nr; 
  try{
      nr = await newRobot.save();
  } catch(error) {
      console.log(error)
  }
  res.json(nr); 
  }); 

  router.get('/robot/:id', async function(req, res, next) {
    let selectedRobots;
    try{ 
      selectedRobots = await Robot.findById(req.params.id);
    }
    catch(err){
      console.log(err);
      return res.sendStatus(404);
    }
    res.json(selectedRobots);
    }); 

module.exports = router;
