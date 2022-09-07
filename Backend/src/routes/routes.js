const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/StudentController')
const AuthController = require('../controllers/AuthController')


router.post('/newStudent', AuthController.verifyJWT, StudentController.newStudent)
router.get('/students', AuthController.verifyJWT, StudentController.queryStudents)
router.get('/students/:ra', AuthController.verifyJWT, StudentController.queryStudent)
router.post('/student/update/:ra', AuthController.verifyJWT, StudentController.updateStudent)
router.delete('/student/delete/:ra', AuthController.verifyJWT, StudentController.deleteStudent)
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);





module.exports = router