const database = require('../database/connection')
const AuthController = require('../controllers/AuthController')

class StudentController {
    newStudent(request, response){
        
       
        const { nome, email, cpf } = request.body
            
        database.insert({nome, email,  cpf}).table('students').then(data=>{
            console.log(data)
            response.json({
                message: "create student success!",
            })
        }).catch(error=>{
            console.log(error)
            response.json({
                message: "create student error!",
            })
        })

    }

    queryStudents(request,response){
        database.select('*').table('students').then(students => {
            console.log(students)
            response.json(students)
        }).catch(error=>{
            console.log(error)
            response.json({
                message: "query error!",
            })
        })
    }

    queryStudent(request,response){
        const ra = request.params.ra
        
        database.select('*').table('students').where({ra:ra}).then(student => {
            console.log(student)
            response.json(student)
        }).catch(error=>{
            console.log(error)
            response.json({
                message: "query error!",
            })
        })
    } 

    updateStudent(request, response){
        const ra = request.params.ra
        const { nome, email} = request.body

        console.log(ra, nome, email)
        
        database.where({ra:ra}).update({nome, email}).table('students').then(data=>{
            console.log(data)
            response.json({
                message: "updated success!",
            })
        }).catch(error=>{
            console.log(error)
            response.json({
                message: "updated error!",
            })
        })

    }

    deleteStudent(request, response){
        const ra = request.params.ra
        const { nome, email} = request.body

        console.log(ra, nome, email)
        
        database.where({ra:ra}).del().table('students').then(data=>{
            console.log(data)
            response.json({
                message: "delete success!",
            })
        }).catch(error=>{
            console.log(error)
            response.json({
                message: "delete error!",
            })
        })

    }

}

module.exports = new StudentController()