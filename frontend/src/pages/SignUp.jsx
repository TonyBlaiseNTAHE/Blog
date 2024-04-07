import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";

import logo from "../images/logo.png";

const Logo = () => (
  <img src={logo} alt="Tony's Blog Logo" className="h-8 sm:h-10 self-center" />
);

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2  font-bold dark:text-white hover:text-blue-700 text-4xl">
              Tony's Blog
            </span>
          </Link>
          <p className="tex-sm mt-5">
            Welcome to my Blog Post website. You can sign up with your email and
            password or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="cyanToBlue" type="submit" outline>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-cyan-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
