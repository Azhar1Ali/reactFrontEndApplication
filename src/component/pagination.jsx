// import react, { useState } from 'react';




// const Appp =()=>{
//     const state = useState();

// let count = 0

// const IncNum = ()=>{
//     console.log('click' +count++)
// }
//     return(
//   <>
//     <h2> {count} </h2>
//     <button onClick={IncNum}>click me</button>
//   </>
//     )
// }

// export default Appp;

// const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:5001/student', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.errors) {
//         const errorMessage = data.errors.msg;
//         setErrorMessage(errorMessage);
//       } else {
//         const successMessage = data.msg;
//         alert(successMessage);
//       }
//     })
//     .catch(error => {
//       console.error('Error submitting form:', error);
//       setErrorMessage('An error occurred while submitting the form. Please try again later.');
//     });
//   };
  
