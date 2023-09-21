import Axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../../utils/UserContext'
import { getCookieInfo } from '../../utils/getCookie'
import google from '../../assets/ContentImages/google.png'
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { setUser } = useContext(UserContext)

  const signUp = async (e) => {
    const email = document.getElementById('email').value
    const fullname = document.getElementById('fullname').value
    const password = document.getElementById('password').value
    const comfirmPassowrd = document.getElementById('confirm-password').value
    e.preventDefault()

    if (comfirmPassowrd !== password) {
      setError('Confirm password do not match password!')
      setTimeout(() => setError(''), 3000)
      return
    }

    await Axios.post(
      'https://web-production-5ee8.up.railway.app/auth/signup',
      {
        email: email,
        fullname: fullname,
        password: password,
        googleId: Math.random().toString(),
      },
      { withCredentials: true }
    )
      .then((response) => {
        if (response.status === 200) {
          setUser(getCookieInfo())
          navigate('/dashboard')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className="signup-card">
      <div className="signup-card2">
        <form className="signup-form">
          <p id="signup-heading">Sign Up</p>
          <p className="text-red-500">{error}</p>
          <div className="signup-field">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="signup-input-icon"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
            <input
              type="text"
              className="signup-input-field"
              placeholder="Full Name"
              autocomplete="off"
              id="fullname"
            />
          </div>
          <div className="signup-field">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="signup-input-icon"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
            <input
              type="email"
              className="signup-input-field"
              placeholder="Email"
              autocomplete="off"
              id="email"
            />
          </div>
          <div className="signup-field">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="signup-input-icon"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              type="password"
              className="signup-input-field"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="signup-field">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="signup-input-icon"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              type="password"
              className="signup-input-field"
              placeholder="Confirm Password"
              id="confirm-password"
            />
          </div>
          <button className="signup-button2 mt-6" onClick={(e) => signUp(e)}>
            Sign Up
          </button>
          <div className="mb-5 flex flex-col items-center">
            <img
              className="w-10 h-10 cursor-pointer"
              src={google}
              alt="google"
              onClick={() =>
                window.open('http://localhost:3000/auth/google', '')
              }
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-cyan-500 mb-1"> Already Have An Account?</p>{' '}
              <a className="text-white hover:text-purple-400" href="/login">
                Log In
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
