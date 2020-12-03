import React, {useEffect, useState} from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";





function Home(props) {
 /*  document.querySelector("#page").addEventListener('click', (e, checkbox = document.querySelector('.navinput'))=>{ 
    if(checkbox.checked) { checkbox.checked = false; e.stopPropagation(); }
    }); */
  
  return (
    <>
      
         
        <div className=" authform">
        
          <div className="enterForm2">
            
            <h2>Welcome to ToDoS</h2> 
            <p><Link className="loginlink" to="/anonList">
            Create List!
            </Link></p>

            <p><Link className="loginlink" to="/login">
              Log In!
            </Link></p>
            
              <p className="signuptext">
                Don't have an account? <Link className="signuplink" to="/signup"> Sign Up! </Link>
              </p>
            
          </div>
        </div>
        
        
      
    </>
  );
}

export default withAuth(Home);
