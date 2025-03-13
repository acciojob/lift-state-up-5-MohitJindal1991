
import React from "react";
import './../styles/App.css';
import {useState} from 'react;
import Child from './Child.jsx';
const App = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
    {isLoggedIn?<p>You are Logged in!</p>:<Child state={setIsLoggedIn}/>}
        {/* Do not remove the main div */}
    
    </div>
  )
}

export default App
