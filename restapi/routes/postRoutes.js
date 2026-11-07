const express = require("express");
const { addStudent, updateStudent, deleteStudent } = require("../controllers/postCOntrollers");
const router = express.Router();



router.post("/students",addStudent)
router.put("/students/:id",updateStudent)
router.delete("/students/:id",deleteStudent)

module.exports = router