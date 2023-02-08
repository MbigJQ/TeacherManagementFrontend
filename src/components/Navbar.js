import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Task Manager</Link>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <Link className={`nav-link ${location.pathname==="/addsubject"? "active": ""}`} to="/addsubject">Add Subject</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <Link className={`nav-link ${location.pathname==="/schedule"? "active": ""}`} to="/schedule">Classes List of Schedules</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar
