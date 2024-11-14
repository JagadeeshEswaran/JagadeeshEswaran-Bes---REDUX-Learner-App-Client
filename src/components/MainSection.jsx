/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Technologies from "./Technologies";
import MyProjects from "./MyProjects";
import { useAppContext } from "../context/Globalcontext";

const MainSection = () => {
  return (
    <main className="">
      <Hero />

      <Technologies />

      <MyProjects />
    </main>
  );
};

export default MainSection;
