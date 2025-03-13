import React from "react";

function Child({ setIsLoggedIn }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    setIsLoggedIn(true); // Update parent state
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />
      </div>

      <div>
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" required />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Child;
