import React, { useState } from 'react';




function LoginForm() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted: Username -', username, 'Password -', password);
  };

  return (
    <div className='divxx'>
      <h2 className='hhh'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='div11'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='divxxxx'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='divxxxxx'>
          <button type="submit" className='bt4'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;