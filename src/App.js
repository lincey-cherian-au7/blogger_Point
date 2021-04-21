import React from 'react'
import { useSelector } from 'react-redux'
import Blogs from './Components/Blogs'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { selectSignedIn } from './features/userDetails'
import './styling/app.css'
const App = () =>{
    const isSignedIn = useSelector(selectSignedIn )
    return (
        <div className="App">
           <Navbar/>
          <br/>
            <Home/>
            {isSignedIn && <Blogs/> }
        </div>
    )
}

export default App
