const express = require("express");
const router = express.Router();
const { User, Course } = require('../db/index');
const userMiddleware = require("../middleware/user");
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {

    const {username, password} = req.body;

    const existingUser = await User.findOne({username});
    if(existingUser){
        res.status(400).json({message: "Username already exists"});
        return;
    }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, password: hashedPassword});
        res.status(200).json({message: "User created successfully"});
    }
});

router.get('/courses', async (req, res) => {
  let courses = await Course.find({});

  courses = courses.map((course) => {
    return {
      ...course._doc,
      published: true,
    };
  });

  res.status(200).json({ courses: courses });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if(course){
        const user = await User.findOne({username: req.headers.username});

        if(user.courses.includes(course._id)){
            res.status(400).json({message: "You already have this course"});
            return;
        }

        user.courses.push(course._id);
        await user.save();

        res.status(200).json({message: "Course purchased successfully"});
    }
    else {
        res.status(404).json({message: "Course with Id not found"});
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const { username } = req.headers;

    const user = await User.findOne({username});
    let courses = [];

    for(let courseId of user.courses){
        const course = await Course.findById(courseId);
        courses.push({ ...course._doc, published: true });
    }

    res.status(200).json({ courses: courses });

});

module.exports = router;