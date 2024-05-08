import React from 'react'
import{ BrowserRouter, Route, Routes }from 'react-router-dom'
import Home from './Home'
import Support from './Support'
import Download from './Download'
import Header1 from './Header1'
import Nav1 from './Nav1'
import Login from './Login'
import SignUp from './SignUp'
import Home2 from './Home2'
import Premium from './Premium'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<><Home/><Home2/></>}/>
            <Route path='/support'element={<><Header1/><Support/></>}/>
            <Route path='/download'element={<><Home/><Download/></>}/>
            <Route path='login' element={<><Nav1/><Login/></>}/>
            <Route path='signup' element={<><Nav1/><SignUp/></>}/>
            <Route path='Premium' element={<><Home/><Premium/></>}/>
            <Route path='prem' element={<><Home/><Premium/></>}/>
            <Route path='log' element={<><Nav1/><Login/></>}/>
            <Route path='log1' element={<><Nav1/><SignUp/></>}/>


        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router