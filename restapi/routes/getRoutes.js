const express = require("express");
const { getAllStudents, getParticularStudent } = require("../controllers/getcontrollers");
const router = express.Router()

router.get('/students',getAllStudents)
router.get("/students/:id",getParticularStudent)

module.exports = router