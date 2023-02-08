import React from 'react'
import AddTeacher from './AddTeacher';

const Home = (props) => {
    const {showAlert} = props;
    return (
      <div>
        <AddTeacher showAlert={showAlert}/>
      </div>
    )
}

export default Home
