import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './SignUpPage.css'

const SignInPage = () => {
  return (
    <div className='signInPage'><SignIn path="/sign-in "/></div>
  )
}

export default SignInPage