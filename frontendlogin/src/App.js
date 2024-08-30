import './App.css'

function App() {
  return (
    <div>
    <div>
      <form action="http://localhost:2000/login" method="get">
        <input type="text" placeholder="Enter your username" name="username" /> <br />
        <input type="text" placeholder="Enter your password" name="password" /> <br />
        <input type="text" placeholder="Enter your confirm password" name="conpassword" /> <br />
        <input type="text" placeholder="Enter login to login" name="login" /> <br />
        <input type="submit"/>
      </form>
    </div>
    </div>
  )
}

export default App