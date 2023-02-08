import React, { useState } from 'react'
import SubjectContext from './subjectContext'

const SubjectState = (props) => {
    const host = "http://localhost:5000"
    const initial = []
    const [subjects,setSubject] = useState(initial)
    const [teacherNames, setTeacherName] = useState(initial)
    const [names, setName] = useState(initial)
    const [levels, setLevel] = useState(initial)

   // Add a project
   const addSubject = async (teacherName, name, level) => {

    //API call
    const response = await fetch(`${host}/api/subject/addsubject`, {
     method: 'POST', 
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({teacherName, name, level})
   });

   const subject = await response.json();
   setSubject(subjects.concat(subject)); 
   console.log(subjects);
 }


// Get Teachers Name
const getTeacherNames = async()=>{
    //Api Call
    const response = await fetch(`${host}/api/teacher/getteacher`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
    });
    const json = await response.json();
    const Names = json;
    setTeacherName(Names)
    console.log(Names);
}

const getSubjects = async () => {

  //API call
  const response = await fetch(`${host}/api/subject/getsubjects`, {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
     'Content-Type': 'application/json',
   },
 });
 const json = await response.json();
 
 setSubject(json);
}

const getSchedules = async (level) => {

  //API call
  const response = await fetch(`${host}/api/subject/schedule/${level}`, {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
     'Content-Type': 'application/json',
   },
 });
 const json = await response.json();
 
 setSubject(json);
}

 
  return (
    <SubjectContext.Provider value={{subjects,setSubject,addSubject,getTeacherNames,teacherNames,setTeacherName,getSubjects,names,levels,getSchedules}}>
        {props.children}
    </SubjectContext.Provider>
  )
}

export default SubjectState
