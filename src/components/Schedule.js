import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SubjectContext from '../context/subjectContext'
import SingleSchedule from './SingleSchedule';

const Schedule = (props) => {
  const context = useContext(SubjectContext);
  const {subjects,teacherNames,names,levels,getSubjects,getSchedules} = context;
  const [teacherName,setTeacherName] =useState("")
  // const uniqClasses = [0];
  const uniq = [...new Set(subjects.map((item)=> item.level))];
  let navigate = useNavigate();

  useEffect(()=>{
    getSubjects();
  },[])

  if(subjects.length < 1){
    return(

      <h2 className="section-title">
      no schedule Available
    </h2>
    )
  }
   const uniqLength = uniq.length;
  //  console.log(uniq);

  

  return (
    <div className="t-container">
      <div className="title">
        <h2>Available Schedules of Classes</h2>
        <div className="underline"></div>
      </div>
      <div className="d-grid gap-3 col-6 mx-auto">
        {
          uniq.map((item)=>{
            return <Link to={`/singleschedule/${item.valueOf(item.index)}`} className="btn btn-primary" key={item.valueOf(item.index)}>Schedule of Class {item.valueOf(item.index)}</Link>
          })
        }
      </div>
    </div>
  )
}

export default Schedule
