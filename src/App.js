import './App.css';
import googleImg from './google.png'
function App() {
  return (
    <div className="app">
      <div className='body'>
        <div className='login-container'>
          <p className='header'>Login to Dashboard</p>
          <label>Email or Mobile Number</label>
          <div>
            <input type='text' className='input' />
          </div>
          <button className='primary-btn'>Next</button>
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
        <p className='help'>Need help ? <span>Contact us </span></p>
      </div>
    </div>
  );
}

export default App;
