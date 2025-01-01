import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
  // const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
  // const REDIRECT_URI = 'http://localhost:5000/auth/google/callback'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      )
      localStorage.setItem('token', response.data.token)
      alert('Login successful!')
    } catch (error) {
      console.error(error)
      alert('Login failed')
    }
  }

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        {
          email,
          password,
        }
      )

      // JWTトークンを保存
      localStorage.setItem('token', response.data.token)
      alert('Registration successful!')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Registration failed')
      }
    }
  }

  const handleGoogleLogin = async () => {
    // const url = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=email%20profile`
    window.location.href = 'http://localhost:5000/api/auth/google'
    // console.log('/api/auth/google')
    // await axios.get('/api/auth/google')
  }

  return (
    <div>
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default LoginPage
