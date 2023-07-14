// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import './App.scss'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
