import React from "react";

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <h2>DataHub</h2>
      <button onClick={getUsers}>Get Users Data</button>
    </nav>
  );
};

export default Navbar;
