const express = require('express');
const router = express.Router();
// const middleware = require('../middleware/middleware');
const Subject = require('../models/Subject');
const { body, validationResult } = require('express-validator');
const Teacher = require('../models/Teacher');
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId


// Route 1: Get all subjects using: POST "/api/subject/getsubjects". Login required
router.post('/getsubjects', async (req, res) => {
    try {
        const subjects = await Subject.find({id:Subject._id},{_id:0,__v:0});
        res.json(subjects)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

//Route 2: Create a filter schedule using: POST "/api/subject/schedule". No login required
router.post('/schedule/:level', async (req, res) => {
    try {
        const subjects = await Subject.find({ level: req.params.level});
        // console.log(subjects);
        res.json(subjects)
        // console.log(subjects);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
  })

// Route 3: Add a new project using: POST "/api/subject/addproject". Login required
router.post('/addsubject', [
    body('teacherName', 'Please select a teacher').isLength({ min: 3 }),
    body('name', 'Enter a valid subject').isLength({ min: 3 }),
    body('level', 'Description must be atleast 1 characters').isLength({ min: 1 }),], async (req, res) => {
        
        try {
            
            const { teacherName, name, level } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const subject = new Subject({
                teacherName,
                name,
                level
            })
        const savedSubject = await subject.save();
            res.json(savedSubject);
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal server error")
        }
    })

    module.exports = router