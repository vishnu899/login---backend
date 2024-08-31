import './index.css'
import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function App() {

  const navigate = useNavigate()
  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")
  const [conpass, setconpass] = useState("")
  const [login, setlogin] = useState("")


  function handleuser(evt) {
    setuser(evt.target.value)
  }

  function handlepass(evt) {
    setpass(evt.target.value)
  }

  function hadleconpass(evt)
  {
        setconpass(evt.target.value)
  }

  function hadlelogin(evt)
  {
    setlogin(evt.target.value)
  }

  function check() {
    var logindetails = axios.get(`http://localhost:2000/login?username=${user}&password=${pass}&conpass=${conpass}&login=${login}`)
    logindetails.then(function (data) {
      if (data.data == true) {
          navigate("/success")
      }
      else {
          navigate("failed")
      }
    })
  }

  return (
    <div className='App'>
      <div className='app'>
        <h1>Login</h1>
        <input type="text" onChange={handleuser} placeholder="Enter your username" name="username" /> <br />
        <input type="text" onChange={handlepass} placeholder="Enter your password" name="password" /> <br />
        <input type="text" onChange={hadleconpass} placeholder='Enter the confirm password' name='conpass' /> <br />
        <input type="text" onChange={hadlelogin} placeholder='Enter login to login' name='login'/> <br />
        <button onClick={check}>Login</button>
      </div>
    </div>
  )
}

export default App