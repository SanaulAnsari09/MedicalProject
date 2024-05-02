import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import Signup from './components/Signup';

const App = () =>{
    return(
        <>
        <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/checkout' element={<Checkout/>}></Route>
                    <Route path='/doctor' element={<Doctor/>}></Route>
                    <Route path='/patient' element={<Patient/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/signup' element={<Signup/>}></Route>
                </Routes>
        </Router>
            
        </>
    )
};

export default App;