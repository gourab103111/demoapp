import { useState ,useContext } from "react";
import { Link } from "react-router-dom"

import { LoginvalueContext} from "../context/LoginvalueContext"

const Menu = () => {

    const {iseuserLogin , setUserLogin } = useContext(LoginvalueContext);
    const {loginusername , setloginusername } = useContext(LoginvalueContext);

  
    let logOut = () => {

      setUserLogin("notlogin");
    }

    return (
        <>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              <li>  
               
              { iseuserLogin=="notlogin" ? <Link to="/login">Login</Link> : <Link to="/login" onClick={logOut}  >Logout</Link> } 
                
  

               

                </li>
              

          </ul>


        
 
        </>
 
    );
 
 }
 
 export default Menu;