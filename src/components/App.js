import React, { useState } from "react";
import Child from "./Child.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>You are logged in!</p> : <Child setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default App;
