const students = [
    {
        id:1,
        name:"adam",
        age:100
    },
    {
        id:2,
        name:"eve",
        age:100
    }
]


const getAllStudents = (req,res)=>{
    res.json(students)
}

const getParticularStudent = (req,res)=>{
    const id = Number(req.params.id)
    const student = students.filter(index=>index.id===id)

    if(!student){
        res.status(404).json("student not found")
    }
    res.json(student)
}

module.exports = {getAllStudents,getParticularStudent}