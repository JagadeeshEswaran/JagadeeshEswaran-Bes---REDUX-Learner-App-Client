/* eslint-disable no-unused-vars */
import React from "react";
import { useAppContext } from "../context/Globalcontext";
import { useSelector } from "react-redux"

const Hero = () => {
  const { data: userdata } = useAppContext();
  const { personalInfo } = useSelector((store) => store.learner);


  return (
    <div
      className="container-fluid bg-secondary d-flex flex-row-reverse justify-content-around align-items-center py-5"
      style={{ height: "40vh" }}
    >
      {/* HERO IMAGE */}
      <div className=" col-3 d-none d-sm-block">
        {/* <img
          className="image"
          src={personalInfo?.profilePic}
          alt="image"
          width={"250px"}
        /> */}
      </div>

      {/* HERE SECTION USER DETAILS */}
      <div className="content d-flex flex-column justify-content-start col-2 text-light">
        <h2 className=" text-nowrap">{personalInfo?.name}</h2>
        <h4>___________________________</h4>
        <h5 className=" " style={{ width: "10rem" }}>
          {personalInfo?.qualification}
        </h5>
        <p style={{ width: "10rem" }}>
          Contact: {personalInfo?.contactNo}
        </p>
        <p style={{ width: "10rem" }}>Email: {personalInfo?.email}</p>
      </div>
    </div>
  );
};

export default Hero;
