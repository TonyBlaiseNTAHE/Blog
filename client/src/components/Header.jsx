import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import React from "react";
import logo from "../images/logo.png";

const Logo = () => (
  <img src={logo} alt="Tony's Blog Logo" className="h-8 sm:h-10 self-center" />
);

export default function Header() {
  return (
    <Navbar className="border-b-2 ">
      <Link to="/" className="flex items-center">
        <Logo />
        <span className="ml-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white hover:text-blue-700">
          Tony's Blog
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="lg:inline"
        />
      </form>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-cyan-700">
          Home
        </Link>
        <Link to="/about" className=" hover:text-cyan-700">
          About
        </Link>
      </div>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="cyanToBlue" outline>
            Sign In
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
