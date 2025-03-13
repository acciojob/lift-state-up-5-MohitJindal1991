import React from "react";

function Child(props) {
  const { state } = props;

  return (
    <form onSubmit={() => state(true)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>

      <div>
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
export default Child;
