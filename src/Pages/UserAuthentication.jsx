/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import RegisterForm from "../components/registerForm";
import LoginForm from "../components/loginForm";
import Button from "../components/Button";
import { useDispatch } from "react-redux"
import axios from "axios"
import { saveLearnerInfo } from "../features/learnerSlice";

const UserAuthentication = () => {
  const [pageVariant, setPage] = useState(null);


  return (
    <>
      <section
        className=" d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <article
          className="mb-3 w-75 d-flex justify-content-evenly align-items-center bg-primary rounded"
          style={{ height: "7vh" }}
        >
          <Button
            title="Register"
            handler={setPage}
            bsStyles={"btn btn-light"}
            valueString={"register"}
          />
          <Button
            title={"Sign In"}
            handler={setPage}
            bsStyles={"btn btn-light"}
            valueString={"login"}
          />
        </article>

        <article
          className="bg-info w-75 rounded d-flex jsutify-content-center align-items-center "
          style={{ height: "30vh" }}
        >
          {pageVariant === "register" ? (
            <RegisterForm />
          ) : pageVariant === "login" ? (
            <LoginForm />
          ) : (
            <p className=" text-center w-100 fw-bold">Welcome to My App!</p>
          )}
        </article>
      </section>
    </>
  );
};

export default UserAuthentication;
