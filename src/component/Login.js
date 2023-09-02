import React, { useEffect, useRef, useState } from 'react'
import './login.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 const [email, setEmail] = useState('');
 const [email1, setEmail1] = useState('');
 const [text, setText] = useState('');
 const [text1, setText1] = useState('');
 const [password, setPassword] = useState('');
 const [password1, setPassword1] = useState('');
 const [emailError, setEmailError] = useState('');
 const [emailError1, setEmailError1] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [passwordError1, setPasswordError1] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
 const containerRef = useRef(null);
const signUpButtonRef = useRef(null);
const signInButtonRef = useRef(null);
 const patt3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

 const handleEmailChange = (e) => {
  setEmail(e.target.value);
  setEmailError('');
 };
 const handleEmailChange1 = (e) => {
  setEmail1(e.target.value);
  setEmailError1('');
 };

 const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  setPasswordError('');
 };
 const handlePasswordChange1 = (e) => {
  setPassword1(e.target.value);
  setPasswordError1('');
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (email === '') {
   setEmailError('Enter Your Email');
   return false;
  }
  else if (patt3.test(email) === false) {
   setEmailError('Enter Valid Email');
   return false;
  }
  else if (password === '') {
   setPasswordError('Enter Your Password');
   return false;
  }
  else {
   axios.post('http://localhost:4300/login', {
    email: email,
    password: password
   })
    .then(function (response) {
     console.log(response.data);
     setText(response.data.status);
     if (response.data.status === "success") {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('UserId', response.data.data[0]._id)
      navigate('/');
     } else {
      navigate('/login');
     }
    })
    .catch(function (error) {
     console.log(error);
    })
  }
 }
 const handleRegister = (e) => {
  e.preventDefault();

  if (email1 === '') {
   setEmailError1('Enter Your Email');
   return false;
  }
  else if (patt3.test(email1) === false) {
   setEmailError1('Enter Valid Email');
   return false;
  }
  else if (password1 === '') {
   setPasswordError1('Enter Your Password');
   return false;
  }
  else {
   axios.post('http://localhost:4300/', {
    email: email1,
    password: password1
   })
    .then(function (response) {
     console.log(response.data);
     setText1(response.data.status);
     if (response.data.status === "success") {
      navigate('/');
     } else {
      navigate('/login')
     }
    })
    .catch(function (error) {
     console.log(error);
    })
  }
 }

 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };

 const show = () => {
  if (showPassword) {
   return <i className="text-secondary"><FaEyeSlash /></i>;
  } else {
   return <i className="text-secondary"><FaEye /></i>;;
  }
 };

 const signUpButtonClickHandler = () => {
  const container = containerRef.current;
  if (container) {
    container.classList.add('right-panel-active');
  }
};

const signInButtonClickHandler = () => {
  const container = containerRef.current;
  if (container) {
    container.classList.remove('right-panel-active');
  }
};

useEffect(() => {
  const container = containerRef.current;
  const signUpButton = signUpButtonRef.current;
  const signInButton = signInButtonRef.current;

  // Check if refs are defined and add event listeners
  if (container && signUpButton && signInButton) {
    signUpButton.addEventListener('click', signUpButtonClickHandler);
    signInButton.addEventListener('click', signInButtonClickHandler);

    // Cleanup by removing event listeners when component unmounts
    return () => {
      signUpButton.removeEventListener('click', signUpButtonClickHandler);
      signInButton.removeEventListener('click', signInButtonClickHandler);
    };
  }
}, []);

 return (
  <>
  <div className="login">
   <div className="container" ref={containerRef} id="container">
    <div className="form-container sign-up-container">
     <form action="#" onSubmit={(e) => handleRegister(e)}>
      <h1>Create Account</h1>
      <div className="social-container">
       <a href="#" className="social"><BsInstagram /></a>
       <a href="#" className="social"><BsTwitter /></a>
       <a href="#" className="social"><BsFacebook /></a>
      </div>
      <span>or use your email for registration</span>
      <input type="email" placeholder="Email" value={email1} onChange={handleEmailChange1} />
      <span className="error">{emailError1}</span>
      <div className="user-box">
       <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password1} onChange={handlePasswordChange1} className='w-100' />
       <i className="eye" onClick={togglePasswordVisibility}>{show()}</i>
       <span className="error">{passwordError1}</span>
      </div>

      <div className="user_box mb-3">
       <span className="error">{text1}</span>
      </div>
      <button className='button'>
       <input className='p-0 m-0 button' type="submit" value="Sign Up" />
      </button>
     </form>
    </div>
    <div className="form-container sign-in-container">
     <form action="#" onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <div className="social-container">
       <a href="#" className="social"><BsInstagram /></a>
       <a href="#" className="social"><BsTwitter /></a>
       <a href="#" className="social"><BsFacebook /></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <span className="error">{emailError}</span>
      <div className="user-box">
       <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} className='w-100' />
       <i className="eye" onClick={togglePasswordVisibility}>{show()}</i>
       <span className="error">{passwordError}</span>
      </div>
      <div className="user_box mb-3">
       <span className="error">{text}</span>
      </div>
      <button className='button'>
       <input className='p-0 m-0 button' type="submit" value="Sign In" />
      </button>
     </form>
    </div>
    <div className="overlay-container">
     <div className="overlay">
      <div className='layer'></div>
      <div className="overlay-panel overlay-left">
       <h1>Welcome Back!</h1>
       <p>To keep connected with us please login with your personal info</p>
       <button className="ghost button" id="signIn" ref={signInButtonRef}>Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
       <h1>Hello, Friend!</h1>
       <p>Enter your personal details and start journey with us</p>
       <button className="ghost button" id="signUp" ref={signUpButtonRef}>Sign Up</button>
      </div>
     </div>
    </div>
   </div>
   </div>
  </>
 )
}
