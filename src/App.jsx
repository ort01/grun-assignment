// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Tooltip from './routes/Tooltip'
import Warning from './routes/Warning'
import Wichtig from './routes/Wichtig'

import './App.scss'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tooltip' element={<Tooltip />} />
        <Route path='/warning' element={<Warning />} />
        <Route path='/wichtig' element={<Wichtig />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
