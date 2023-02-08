import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectContext from '../context/subjectContext';

const AddSubject = (props) => {

    const context = useContext(SubjectContext);
    const { addSubject, getTeacherNames, teacherNames } = context;
    const Names = (teacherNames)

    const [subject, setSubject] = useState({ tName: "", name: "", classNumber: "" });
    const [teacherName, setTeacherName] = useState("")
    const [cNumber, setCNumber] = useState("");

    let navigate = useNavigate();
    const handleNavigate = ()=>{navigate("/schedule")}

    useEffect(() => {
        getTeacherNames();
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        addSubject(teacherName, subject.name, cNumber);
        setSubject({tName:"", name: "", classNumber: "" })
        props.showAlert("Added successfully", "success");
    }

    const handleSelectChange = (e) => {
        setTeacherName(e.target.value);
    }

    const handleSelectChange2 = (e) => {
        setCNumber(e.target.value);
    
    }

    const onChange = (e) => {
        setSubject({ ...subject, [e.target.name]: e.target.value })
    }
    return (
        <div className='t-container'>
            <div className="title">
        <h2>Add a Subject and Allocate a Class</h2>
        {/* <div className="underline"></div> */}
      </div>
            
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={subject.name} onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Class Level</label>
                    <select className="form-select" aria-label="Default select example" id='cNumber' name='cNumber' onChange={handleSelectChange2}>
                        <option value={"Select Class Level"}>Select Class Level</option>
                        <option value={subject.cNumber}>One</option><option value={subject.cNumber}>Two</option><option value={subject.cNumber}>Three</option>
                        <option value={subject.cNumber}>Four</option><option value={subject.cNumber}>Five</option><option value={subject.cNumber}>Six</option>
                        <option value={subject.cNumber}>Seven</option><option value={subject.cNumber}>Eight</option><option value={subject.cNumber}>Nine</option>
                        <option value={subject.cNumber}>Ten</option><option value={subject.cNumber}>Eleven</option><option value={subject.cNumber}>Twelve</option>
                    </select>
                    {cNumber}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Select Teachers Name</label>
                    <select className="form-select" aria-label="Default select example" onChange={handleSelectChange} id='tName' name='tName' >
                        <option value={"Select Teacher"}>Select Teacher's Name</option>
                        {teacherNames.map((teacherName) => <option key={teacherName._id} value={teacherName.name}>{teacherName.name}</option>)}
                    </select>
                    <h3>{teacherName}</h3>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Subject</button>

                <button type="button" className="btn btn-primary" onClick={handleNavigate}>Predicted Schedule</button>
            </form>
        </div>
    )
}

export default AddSubject
