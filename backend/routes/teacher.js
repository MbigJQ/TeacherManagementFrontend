const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const { body, validationResult } = require('express-validator');

//Route 1: Create a user using: POST "/api/teacher/addteacher". No login required
router.post('/addteacher', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    //create a new teacher
    let teacher = await Teacher.create({
      name: req.body.name,
    });
    const data = {
      teacherId: {
        id: teacher.id
      }
    }
    success = true;
    res.json({success,data});
  }
  catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }
})

// Route 2: Get Teacher Name list using: GET "/api/teacher/getteacher". No Login required
router.get('/getteacher', async (req, res) => {
  try {
    // teacherId = req.Teacher.id;
    const teacherNames = await Teacher.find({}).select("name");
    // res.send(user)
    res.json(teacherNames)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }
})

module.exports = router