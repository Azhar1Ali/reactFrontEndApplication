import { useState, useEffect } from 'react';
import axios from 'axios';
// import { json } from 'react-router-dom';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [course, setCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailExists, setEmailExists] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setErrorMessage('');
  };
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
    setEmailExists(false);
  };
 
  const handleContact = (e) => {
    setContact(e.target.value);
    setErrorMessage('');
  };

  const handleCourse = (e) => {
    setCourse(e.target.value);
    setErrorMessage('');
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email exists before submitting the form
    if (emailExists) {
      console.log('Email already exists');
      // console.log(email)
      return;
    }

    axios.post("http://localhost:5001/student", { name, email, contact, course })
      .then(response => {
        setName('');
        setEmail('');
        setContact('');
        setCourse('');
        setErrorMessage(response.data.errors);
        console.log(response.data.errors.msg);
      })
      .catch(error => {
        // console.log(error.response.data);
        // setErrorMessage(error.response.data);
      });
  };

  useEffect(() => {
    if (errorMessage) {
      console.log(errorMessage); // this will print the error message in the console
    }
  }, [errorMessage]);

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5001/studentss/${email}`)
        .then(response => {
          setEmailExists(response.data.length > 0);
          console.log(setEmailExists)
        })
        .catch(error => {
          // console.log(error);
        });
    }
  }, [email]);
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      <div className="messages">
        {errorMessage && (
          <div className="error">
            {errorMessage.map((error, index) => (
              <p key={index}>{error.msg}</p>
            ))}
          </div>
        )}

        {emailExists && (
          <div className="error">
            <p>Email already exists</p>
          </div>
        )}
      </div>
 
      <form onSubmit={handleSubmit}>
        <div className="messages">
        </div>

        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Contact</label>
        <input onChange={handleContact} className="input"
          value={contact} type="text" />

        <label className="label">Course</label>
        <input onChange={handleCourse} className="input"
          value={course} type="text" />
 
        <button x className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}