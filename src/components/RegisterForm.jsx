import React, { useState } from "react";
import InputTextElement from "./InputTextElement";
import Button from "./Button";

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    dob: "",
  });

  const handleUserRegistration = (_, e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userInfo));

    setUserInfo({
      username: "",
      password: "",
      dob: "",
    });
  };

  console.log("Register Component Rendering...");

  return (
    <form className="d-flex w-100 flex-column justify-content-evenly align-items-center h-100">
      <InputTextElement
        htmlFor={"username"}
        labelValue={"Username :"}
        inputType={"text"}
        inputName={"username"}
        inputId={"username"}
        handler={setUserInfo}
        data={userInfo}
        field={"username"}
      />

      <InputTextElement
        htmlFor={"password"}
        labelValue={"Password :"}
        inputType={"password"}
        inputName={"password"}
        inputId={"password"}
        handler={setUserInfo}
        data={userInfo}
        field={"password"}
      />

      <InputTextElement
        htmlFor={"dob"}
        labelValue={"Date Of Birth :"}
        inputType={"date"}
        inputName={"dob"}
        inputId={"dob"}
        handler={setUserInfo}
        data={userInfo}
        field={"dob"}
      />

      <article className=" w-75 d-flex justify-content-evenly">
        <Button
          title="Register"
          bsStyles={"btn btn-primary"}
          handler={handleUserRegistration}
        />
        <Button title="Cancel" bsStyles={"btn btn-danger"} />
      </article>
    </form>
  );
};

export default RegisterForm;
