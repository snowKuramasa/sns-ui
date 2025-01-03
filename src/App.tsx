import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </Router>
  )
}

export default App
