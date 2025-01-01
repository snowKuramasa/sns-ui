import React from 'react'
import { useLocation } from 'react-router-dom'

const UserPage: React.FC = () => {
  const { state } = useLocation()
  const user = state?.user

  return (
    <div className='UserPage'>
      <h1>User Information</h1>
      {user ? (
        <div>
          <p>{`Name: ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  )
}

export default UserPage
