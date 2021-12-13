import React, {useState,useReducer,useEffect,useContext} from 'react';

import { LoginvalueContext } from "../../context/LoginvalueContext"



const Login = () => {

     const {iseuserLogin , setUserLogin } = useContext(LoginvalueContext);

     const {loginusername , setloginusername } = useContext(LoginvalueContext);

     useEffect(()=>{

          states.username = "Defalult";
          states.userpassword = "Defalult";
          dispatch({  type: "updateinputs" });

              console.log("it is loaded ");

     },[]);



     let validateFrom = (states, action) =>  {
          switch(action.type){

              
           case "updateinputs":
               return {username:states.username,userpassword:states.userpassword};
         //  return {username:username,userpassword:states.userpassword};


         case "VALIDATEFROM":

          setUserLogin("islogin");

          setloginusername(states.username);

           return {username:states.username,userpassword:states.userpassword};
          
           case "CLEAR":
      
               console.log("User Name: "+states.username+" , User Password: "+states.userpassword);
     
          return {username:"",userpassword:""};

          default:
               return states;
          }
      
      }; 

  const [username, setUserName] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [states, dispatch] = useReducer(validateFrom, {username:"",userpassword:""});
   

  
  
  let onUserNameChange = (event) =>  {
        // console.log("User Name: "+event.target.value);
        states.username = event.target.value;
       dispatch({  type: "updateinputs" });
  }; 

  let onUserPasswordChange = (event) =>  {
     setuserpassword(event.target.value);
     states.userpassword = event.target.value;  
    
       dispatch({  type: "updateinputs" });
}; 
  
    return (<form>
         
         <div>

         <label>
User Name :

<input type="text" name="user_name" value={ states.username } onChange={(event) =>  {
        // console.log("User Name: "+event.target.value);
        states.username = event.target.value;
       dispatch({  type: "updateinputs" });
  }} />

         </label>

         </div>

         <div>
          
         <label>
User Password :

<input type="password" name="user_password" value={ states.userpassword } onChange={(event) =>  {
     setuserpassword(event.target.value);
     states.userpassword = event.target.value;  
    
       dispatch({  type: "updateinputs" });
}} />

         </label>

         </div>
        

    <div>
    
   

    <input type="button" value="Login" onClick={ ()=>{

         dispatch({  type: "VALIDATEFROM" })
    } }   />


<input type="button" value="Clear" onClick={ ()=>{

dispatch({  type: "CLEAR" })
} }   />

    </div>
        

         

        
    </form>);

 
 }
 
 export default Login;