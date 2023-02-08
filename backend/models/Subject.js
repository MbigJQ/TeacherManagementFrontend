const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubjectSchema = new Schema({
  teacherName:{
    type: String,
    required:true
  },
  name:{
    type: String,
    required: true
  },
  level:{
    type: String,
    required: true
  }
});
module.exports = mongoose.model('subject', SubjectSchema);