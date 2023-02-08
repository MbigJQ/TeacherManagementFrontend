import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Alert from './components/Alert';
// import Signup from './components/Signup';
// import Login from './components/Login';
import { useState } from 'react';
import SubjectState from './context/SubjectState';
// import AddTecher from './components/AddTecher';
import AddSubject from './components/AddSubject';
import Schedule from './components/Schedule';
import AddTeacher from './components/AddTeacher';
import SingleSchedule from './components/SingleSchedule';
// import Dashboard from './components/Dashboard';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <SubjectState>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
      <Route path="/" element={<Home showAlert={showAlert}/>} />
      {/* <Route exact path="/about" element={<About />} /> */}
      <Route exact path="/addteacher" element={<AddTeacher showAlert={showAlert}/>} />
      <Route exact path="/addsubject" element={<AddSubject showAlert={showAlert}/>} />
      <Route exact path="/schedule" element={<Schedule showAlert={showAlert}/>} />
      <Route exact path="/singleschedule/:level" element={<SingleSchedule showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </SubjectState>
    </>
  );
}

export default App;