import React from "react";
import TextComponentOne from "../components/texts/TextComponentOne.tsx";
import TextComponentTwo from "../components/texts/TextComponentTwo.tsx";
import FormLabel from "../components/texts/FormLabel.tsx";
import FormInput from "../components/texts/FormInput.tsx";
import Button from "../components/button/Button.tsx";

const SignUp = () => {
  return (
    <div className="w-[100%] h-[100vh] items-center flex justify-center">
      <form className="w-[450px] border text-center p-6 rounded">
        <TextComponentOne text="Create Account" />
        <TextComponentTwo text="Please fill the following form with your personal information" />
        <div className="my-8 flex flex-row justify-around">
          <div className={`flex flex-col items-start`}>
            <FormLabel
              text="Name"
              forText="name"
            />
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
            />
          </div>
          <div className={`flex flex-col items-start`}>
            <FormLabel
              text="Email"
              forText="email"
            />
            <FormInput
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="enter your email"
            />
          </div>
        </div>
        <div className="my-4 flex flex-row justify-around">
          <div className={`flex flex-col items-start`}>
            <FormLabel
              text="Password"
              forText="password"
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
            />
          </div>
          <div className={`flex flex-col items-start`}>
            <FormLabel
              text="Confirm Password"
              forText="password"
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              placeholder="re-enter your password"
            />
          </div>
        </div>
        <Button
          buttonText="Submit"
          buttonType="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
