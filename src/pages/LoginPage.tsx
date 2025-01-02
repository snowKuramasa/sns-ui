import { useState } from 'react'
import axios from 'axios'
import { Button, Box, Text, Input, Icon } from '@chakra-ui/react'
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import { FaGoogle } from 'react-icons/fa'

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
      <ColorModeSwitcher />
      <Box margin={2}>
        <Text>Email</Text>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box margin={2}>
        <Text>Password</Text>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {!!password && (
        <Box margin={2}>
          <Text>Password</Text>
          <Input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
      )}
      <Button bg='gray.400' margin={2} onClick={handleRegister}>
        Register
      </Button>
      <Button bg='gray.400' margin={2} onClick={handleLogin}>
        Login
      </Button>
      <Button
        bg='gray.400'
        margin={2}
        leftIcon={<Icon as={FaGoogle} />}
        onClick={handleGoogleLogin}
      >
        Login with Google
      </Button>
    </div>
  )
}

export default LoginPage
