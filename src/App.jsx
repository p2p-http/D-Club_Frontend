import Navbar from './Components/navbar'
import Home from './Components/home'
import SignUp from './Components/SignUp'
import Login from './Components/login'
import ConfirmPass from './Components/confirmPass'
import { Route, Routes } from 'react-router-dom'
import ForgotPass from './Components/forgotpass'

function App() {


  return (
    
    <div className=' bg-black h-screen w-screen'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/signup' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/confirmpass' element={<ConfirmPass/>}  />
        <Route path='/forgotpass' element={<ForgotPass/>}  />
      


      </Routes>
      {/* <ConfirmPass/> */}
     
      
      </div>
    
  )
}

export default App
