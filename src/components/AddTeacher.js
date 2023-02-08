import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const AddTeacher = (props) => {
    const [credentials, setCredentials] = useState({ name: ""});

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name} = credentials;
    const response = await fetch("http://localhost:5000/api/teacher/addteacher", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setCredentials({ name: "" })
      props.showAlert("Teacher added successfully", "success");
    } else {
      props.showAlert("invalid credentials", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='t-container'>
      <div className="title">
        <h2>Add a Teacher</h2>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required/>
        </div>
        <button disabled={credentials.name.length < 3 } type="submit" className="btn btn-primary">Add More Teacher</button>
        <Link to={"/addsubject"} disabled={credentials.name.length < 3} className="btn btn-primary">Add Subject</Link>
      </form>
    </div>
  )
}

export default AddTeacher
