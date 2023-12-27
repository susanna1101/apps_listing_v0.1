import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345678') {
      localStorage.setItem('isLoggedIn', true);
      navigate('/apps');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
};

export default LoginPage;
