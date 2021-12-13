import { Route, Routes  } from "react-router-dom"
// import {  Redirect } from "react-router"
import { useState ,useContext } from "react";

import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"

import Errorpage from "../pages/Error/Errorpage"
import Login from "../pages/Login/Login"
//import Logout from "../pages/Login/Logout"

import { LoginvalueContext} from "../context/LoginvalueContext"



const Routes1 = () => {


    const {iseuserLogin , setUserLogin } = useContext(LoginvalueContext);
    const {loginusername , setloginusername } = useContext(LoginvalueContext);

  
    return (
           <>
        <Routes>
              <Route exact path="/"  element={<Home  />}/> 
              <Route exact path="/about"  element={<About  />}/> 
              <Route path="/contact"  element={<Contact />} /> 

             
              <Route  path="*" element={<Errorpage />} /> 
              <Route  path="/login" element={ iseuserLogin=="notlogin" ? <Login />   : <Contact />} />

             
                
  
              
          </Routes> 
           </>

    );
 
 }
 
 export default Routes1;