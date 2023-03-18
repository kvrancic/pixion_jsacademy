var express = require('express');
var router = express.Router();

const Robot = require('../Robot.js');

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

// TASK 3
// Create a new route GET /robot/:id which will return a robot from the database with ID provided in PATH parameter.
// Return status 404 if not found

/* router.put('/', async function(req, res, next) {
  const newRobot = new Robot({name: 'Pixion2'});
  let nr; 
  try{
      nr = await newRobot.save();
  } catch(err) {
      console.log(err)
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
    });  */

// HOMEWORK 
// POST /robot/new - create a robot with a name
// Isn't the first task almost the same as the first part of the previous task because we also had to populate the database in order to search for robots with ID provided in the parameter? 
router.post('/robot/new', async function(req, res, next) {
  const newRobot = new Robot({name: 'Pixion3'});
  let nr; 
  try{
      nr = await newRobot.save();
  } catch(err) {
      console.log(err)
      return res.sendStatus(500);
  }
  res.json(nr); 
  }); 

// GET /robot/name - find all robots that have query (through query params) in any part of their name. Case insensitive.
router.get('/robot/name', async (req, res, next) => {
  console.log(req.query); // for debugging purposes 
  const query = req.query.name;
  try {
    /* const temp = await Robot.find({}); // u temp stavi sve robote kako bi mogao raditi pretragu 
    const approvedRobots = temp.filter(robot => robot.name.toLowerCase().includes(query.toLowerCase())); */
    const approvedRobots = await Robot.find({ name: { $regex: query, $options: 'i' } }); // this should be faster than extracting to the temp
    res.json(approvedRobots);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
