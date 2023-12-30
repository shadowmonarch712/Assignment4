import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import image from '../../../assets/logo.png'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!username.match(emailRegex)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      setErrorMessage('Password must contain an uppercase letter, a number, and a special character (@)');
      return;
    }

    if (password !== 'SmartServTest@123') {
      setErrorMessage('You cannot login');
      return;
    }

    setErrorMessage(''); // clear the error message if form submission is successful
    console.log('Form submitted');
    navigate('/dashboard'); // navigate to the next component
  };

  return (
    <div className='body'>
        
    <div className="container">
      <div className="card">
        <img src={image} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <input type="submit" value="Login" className="input-field submit-btn" />
        </form>
        <a className="forget-password" href="mailto:support@smartserv.io?subject=Password Reset Request">Forgot your password?</a>
      </div>
    </div>
    </div>
  );
}

export default App;
