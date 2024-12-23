import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Outlet />
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        {/* <li>
          <Link to="/layout">Layout</Link>
        </li> */}
        <li>
          <Link to="/nopage">NoPage</Link>
        </li>
      </ul>
    </nav>
    
  </>  );
}

export default Layout;