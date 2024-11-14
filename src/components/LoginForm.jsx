/* eslint-disable react/prop-types */
import { useRef } from "react";
import InputTextElement from "./InputTextElement";
import Button from "./Button";

const LoginForm = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleSignIn = (_, e) => {
    e.preventDefault();
    // const userData = JSON.parse(localStorage.getItem("userData"));

    // const isUsernameMatching = userData.username === usernameRef.current.value;
    // const isPasswordMatching = userData.password === passwordRef.current.value;

    // if (isUsernameMatching && isPasswordMatching) {
    //   alert("Logged In Successfully!!");
    //   location.reload();
    //   localStorage.setItem("isUserLoggedIn", true);
    // } else {
    //   alert("Invalid credentials...");
    //   location.reload();
    //   localStorage.setItem("isUserLoggedIn", false);
    // }

    localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
    localStorage.setItem("username", JSON.stringify(usernameRef.current.value))
    localStorage.setItem("password", JSON.stringify(passwordRef.current.value))

    location.reload();
  };

  return (
    <form className="d-flex w-100 flex-column justify-content-evenly align-items-center h-100">
      {/* <TestComponent testInput={testInput} setTestInput={setTestInput} /> */}

      <InputTextElement
        htmlFor={"username"}
        labelValue={"Username :"}
        inputType={"text"}
        // inputName={"username"}
        // inputId={"username"}
        // handler={setUserInput}
        // data={userInput}
        // field={"username"}
        refObject={usernameRef}
      />

      <InputTextElement
        htmlFor={"password"}
        labelValue={"Password :"}
        inputType={"password"}
        // inputName={"password"}
        // inputId={"password"}
        // handler={setUserInput}
        // data={userInput}
        // field={"password"}
        refObject={passwordRef}
      />

      <article>
        <Button
          title="Sign In"
          bsStyles={"btn btn-primary"}
          handler={handleSignIn}
        />
      </article>
    </form>
  );
};

export default LoginForm;
