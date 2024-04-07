import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

import logo from "../images/logo.png";

const Logo = () => (
  <img src={logo} alt="Tony's Blog Logo" className="h-8 sm:h-10 self-center" />
);

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
          <div className="mt-5">
            <Link to="/" className="flex items-center text-lg">
              <Logo />
              <span className="ml-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white hover:text-blue-700">
                Tony's Blog
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow Me"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/TonyBlaiseNTAHE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/ntahe-tony-blaise-4a7619244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Tony's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100007421085545"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/ntahe-tony-blaise-4a7619244/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/TonyBlaiseNTAHE"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.twitter.com/t_ntahe"
              icon={BsTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
