import React, { useState } from 'react';
import '../LoginForm.css';


const LoginForm = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/student');
      const data = await response.json();

      // Find the matching user based on name and course
      const user = data.find((student) => student.name === name && student.course === course);

      if (user) {
        // Handle successful login
        console.log('Login successful!');
      } else {
        // Handle invalid credentials
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
