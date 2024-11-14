/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-100 d-flex justify-content-between align-items-center bg-dark text-light"
      style={{
        height: "7svh",
      }}
    >
      <h1 className="w-25 ps-3">MyApp</h1>

      <nav className="w-50  ">
        <ul
          className="m-0 w-sm-50 h-100 d-flex justify-content-between align-items-center"
          style={{ listStyle: "none" }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <icon className="w-25 d-flex align-items-center justify-content-end me-3 h-25">
        <article
          className=" w-25 d-flex justify-content-center align-items-center rounded-circle bg-light text-dark fw-bold"
          style={{ height: "4svh" }}
          onClick={() => { localStorage.clear(), location.reload() }}
        >
          i
        </article>
      </icon>
    </div>
  );
};

export default Navbar;
