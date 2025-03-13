import React from 'react';

function Child(props){

  const {state}=props;

  return (
    <>
      <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id=""username"  />
      </div>

      <div>
      <label htmlFor="pass">Password:</label>
      <input type="password" id="pass" />
      </div>

      <button onClick={()=>state(true)}>Login</button>
    </>
  )
  
}
export default Child;
