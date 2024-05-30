import { useState } from 'react';
import './App.css';
import googleImg from './google.png'
function App() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isNaN(value)) {
      if (!emailPattern.test(value)) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (value.length !== 10) {
        setErrorMessage('Please enter a valid 10-digit mobile number.');
      } else {
        setErrorMessage('');
      }
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };
  const handleNextClick = () => {
    if (!errorMessage) {
      alert('All good!');
      setInputValue('');
    }
  };
  return (
    <div className="app">
      <div className='body'>
        <div className='login-container'>
          <p className='header'>Login to Dashboard</p>
          <label>Email or Mobile Number</label>
          <div>
            <input
              type='text'
              className='input'
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <button className='primary-btn' onClick={handleNextClick} disabled={!!errorMessage || !inputValue}>Next</button>
          <div className='breaker-container'>
            <div className='breaker' />
            <span>or</span>
            <div className='breaker' />
          </div>
          <div className='btn-container'>
            <button className='google-btn'>
              <img src={googleImg} alt='google-icon' />
              Sign in with google
            </button>
          </div>
        </div>
        <p className='help'>Need help ? <a className='link' href="mailto:28brana@gmail.com">Contact us</a></p>
      </div>
    </div>
  );
}

export default App;
