const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const { Admin, Course } = require("../db/index");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await Admin.findOne({ username });
  if (existingUser) {
    res.status(400).json({ message: "Username already exists" });
    return;
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ username, password: hashedPassword });
    res.status(200).json({ message: "Admin created successfully" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;

  const course = await Course.create({ title, description, price, imageLink });

  const admin = await Admin.findOne({ username: req.headers.username });
  admin.courses.push(course._id);
  await admin.save();

  res
    .status(200)
    .json({ message: "Course created successfully", courseId: course._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  let courses = [];
  const admin = await Admin.findOne({ username: req.headers.username });
  for (let courseId of admin.courses) {
    const course = await Course.findById(courseId);
    courses.push({ ...course._doc, published: true });
  }

  return res.status(200).json({ courses: courses });
});

module.exports = router;
