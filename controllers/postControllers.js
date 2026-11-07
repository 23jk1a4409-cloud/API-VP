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

const addStudent = (req,res)=>{
    const {name,age} = req.body
    const newStudent = {
        id:students.length+1,
        name,
        age
    }
    if(newStudent){
        students.push(newStudent)
        res.json(newStudent)
    }
}

const updateStudent = (req,res)=>{
    const {name,age} = req.body
    const id = Number(req.params.id);
    const updateStudent = students.find(i=>i.id===id)

    if(updateStudent){
       updateStudent.name = name || students.name
       updateStudent.age = age || students.age
       res.json(updateStudent)
    }
}

const deleteStudent = (req,res)=>{
    id = Number(req.params.id)
    index = students.find(i=>i.id !== id)
    if(index){
        students.splice(index,1)
        res.json("student is deleted")
    }    
}

module.exports = {addStudent,updateStudent,deleteStudent}