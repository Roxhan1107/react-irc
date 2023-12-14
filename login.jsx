import React, { useState } from "react";
import './design.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handling changes in the input fields and updating the state
  const handleChangeEvent = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, log the form data to the console
    console.log('Form submitted with:', { email, password });
  };

  return (
    <body>
      
    
    <div className="log">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEvent} // Corrected placement
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeEvent} // Corrected placement
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </body>
  );
}

export default Login