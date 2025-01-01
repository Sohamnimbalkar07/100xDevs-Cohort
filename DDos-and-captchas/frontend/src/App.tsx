import { Turnstile } from '@marsidev/react-turnstile'

import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<string>("")

  return (
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New password'></input>

      <Turnstile onSuccess={(token : string) => {
        setToken(token)
      }} siteKey='site-key' />

      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "sohamnimbalkar07@gmail.com@gmail.com",
          otp: "123456",
          token: token,
        })
      }}>Update password</button>
    </>
  )
}

export default App