import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/Navbar'

const App = () => {
    return (
        <>
        <NavBar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
};

export default App