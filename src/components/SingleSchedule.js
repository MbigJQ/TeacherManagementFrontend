import React, { useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom';
import SubjectContext from '../context/subjectContext';
var _ = require('underscore');

const SingleSchedule = () => {
  const context = useContext(SubjectContext);
  const { getSubjects, subjects } = context;
  const { level } = useParams();

  useEffect(() => {
    getSubjects();
  }, [])

  // Filter the results to display data without id and extra field
  const list = subjects.filter(data => {
    // return data.level === JSON.stringify(value);
    return data.level === level;
  });

  let unsortedArray = [...new Set(list)];
  // console.log("Unsorted Array")
  // console.log(unsortedArray)

  var sortedArray = [...new Set(list.sort((a, b) => {
    let x = a.teacherName.toLowerCase();
    let y = b.teacherName.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  }))];

  // let ascendingOrder = true;
  // if (ascendingOrder) {
  //   var sortedArray = [...new Set(list.sort((a, b) => {
  //     let x = a.teacherName.toLowerCase();
  //     let y = b.teacherName.toLowerCase();
  //     if (x < y) { return -1; }
  //     if (x > y) { return 1; }
  //     return 0;
  //   }))];
  //   ascendingOrder = false;
  //   console.log("Ascending Order is " + ascendingOrder);
  //   console.log(sortedArray);
  // } else {
  //   sortedArray = [...new Set(list.sort((a, b) => {
  //     let x = a.teacherName.toLowerCase();
  //     let y = b.teacherName.toLowerCase();
  //     if (y < x) { return -1; }
  //     if (y > x) { return 1; }
  //     return 0;
  //   }))];
  //   ascendingOrder = true;
  //   console.log("Descending Order");
  //   console.log(sortedArray);
  // }

  const randomlly = Math.floor(Math.random() * sortedArray.length);
for (const property in randomlly) {
  console.log(`${property}: ${randomlly[property]}`);
}

const valueArr = sortedArray.map(function(item){ return item.name });
const isDuplicate = valueArr.some(function(item, idx){ 
  return valueArr.indexOf(item) != idx 
});
// console.log(isDuplicate);

const randomly = _.sample(sortedArray);
// console.log("randomly selection by_sample");
// console.log(randomly);

const shuffleObj = (arr) => {
  let counter;
  let index;
  const duplicates = [];
  let ranNum = [];
  for (index = 0; index < 6; index++) {
    if(isDuplicate === true){
      counter +=1;
       duplicates.push([...arr]);
       arr.splice()
    }
    ranNum.push([...arr, Math.floor(Math.random() * arr.length)]);
  }
  return ranNum;
}

const count = sortedArray.reduce((accumulator, value) => {
  return {...accumulator, [value]: (accumulator[value] || 0) + 1};
}, {});

console.log(count);

  // function to carried out the array without duplicate values
  let uniqList = sortedArray.filter(
    (person, index) => index === list.findIndex(
      other => person.name === other.name
        && person.level === other.level
    ));

    shuffleObj(uniqList);


  // const newArray = Array.from(new Set(list));
  // console.log("Normal Array")
  // console.log(list)
  // console.log("Unique Array")
  // const newArray = [...new Set(sortedArray)]
  // console.log(uniqList);


  const shuffle = (arr) => {
    let index;
    let ranNum = [];
    for (index = 0; index < 6; index++) {
      ranNum.push([...arr, Math.floor(Math.random() * arr.length)]);
    }
    return ranNum;
  }

  // console.log("newList 1");
  const newList1 = shuffle(uniqList)[0];
  // console.log(newList1);

  // console.log("newList 2");
  const newList2 = shuffle(uniqList)[1];
  // console.log(newList2);

  // console.log("newList 3");
  const newList3 = shuffle(uniqList)[2];
  // console.log(newList3);

  // console.log("newList 4");
  const newList4 = shuffle(uniqList)[3];
  // console.log(newList4);

  // console.log("newList 5");
  const newList5 = shuffle(uniqList)[4];
  // console.log(newList5);

  // console.log("newList 6");
  const newList6 = shuffle(uniqList)[5];
  // console.log(newList6);


  return (
    <div className='t-container'>
      <div className="title">
        <h2>Subject Schedules of Class {level}</h2>
        {/* <div className="underline"></div> */}
      </div>
      <div>
        <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="monday-schedule-tab" data-bs-toggle="pill" data-bs-target="#monday-schedule" type="button" role="tab" aria-controls="monday-schedule" aria-selected="true">Monday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="tuesday-schedule-tab" data-bs-toggle="pill" data-bs-target="#tuesday-schedule" type="button" role="tab" aria-controls="tuesday-schedule" aria-selected="false">Tuesday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="wednesday-schedule-tab" data-bs-toggle="pill" data-bs-target="#wednesday-schedule" type="button" role="tab" aria-controls="wednesday-schedule" aria-selected="false">Wednesday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="thursday-schedule-tab" data-bs-toggle="pill" data-bs-target="#thursday-schedule" type="button" role="tab" aria-controls="thursday-schedule" aria-selected="false">Thursday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="friday-schedule-tab" data-bs-toggle="pill" data-bs-target="#friday-schedule" type="button" role="tab" aria-controls="friday-schedule" aria-selected="false">Friday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="sat-schedule-tab" data-bs-toggle="pill" data-bs-target="#sat-schedule" type="button" role="tab" aria-controls="sat-schedule" aria-selected="false">Saturday</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="monday-schedule" role="tabpanel" aria-labelledby="monday-schedule-tab" tabIndex="0"><table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList1.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
          <div className="tab-pane fade" id="tuesday-schedule" role="tabpanel" aria-labelledby="tuesday-schedule-tab" tabIndex="0"><table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList2.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
          <div className="tab-pane fade" id="wednesday-schedule" role="tabpanel" aria-labelledby="wednesday-schedule-tab" tabIndex="0"> <table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList3.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
          <div className="tab-pane fade" id="thursday-schedule" role="tabpanel" aria-labelledby="thursday-schedule-tab" tabIndex="0"> <table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList4.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
          <div className="tab-pane fade" id="friday-schedule" role="tabpanel" aria-labelledby="friday-schedule-tab" tabIndex="0"> <table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList5.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
          <div className="tab-pane fade" id="sat-schedule" role="tabpanel" aria-labelledby="sat-schedule-tab" tabIndex="0"> <table className="table table-success table-striped">
            <tbody>
              <tr>
                <th>Teacher Name</th>
                <th>Period of Subject</th>
                <th>Class</th>
              </tr>
              {/* Display the data in table */}
              {newList6.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))
              }
            </tbody>
          </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleSchedule
