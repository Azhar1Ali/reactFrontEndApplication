// import React, { useState, useEffect } from 'react';

// function DataTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(item => (
//           <tr key={item.id}>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default DataTable;











import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/student')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.contact}</td>
            <td>{student.course}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    
  );
}



export default DataTable;





