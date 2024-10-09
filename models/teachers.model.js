const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  subject: String,
  salary:Number
})

const TeacherModel = mongoose.model('teachers', teacherSchema)

module.exports = {TeacherModel}