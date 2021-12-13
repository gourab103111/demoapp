//import logo from './assets/images/logo.svg';
import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';

import { LoginvalueContext} from "./context/LoginvalueContext"
import Routes1 from "./routes/Routes1"
import Menue from "./component/Menu";



const App = () => {

  

    const [iseuserLogin, setUserLogin]= useState("notlogin");

    const [loginusername, setloginusername]= useState("");
  
   return (
       <>
         <LoginvalueContext.Provider value={{ setUserLogin, iseuserLogin , loginusername, setloginusername}} >


        
       <Menue />
       <Routes1 />


       </LoginvalueContext.Provider>
         

       </>

   );

}

export default App;
