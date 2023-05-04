// import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo/logo.png";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import vec from "assets/images/svg/Group37.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer mt-16 flex flex-col">
      <div className="footer-body w-full">
        <figure
          className="image"
          style={{ margin: "auto", marginBottom: "80px" }}
        >
          <img src={vec} alt="footer-plc" />
        </figure>
        <div className="footer-column flex w-full text-white dark:text-black">
          <div className="basis-1/2 p-0 footer-description-column text-left sm:test-right">
            <Link to="/" className="nav-logo hidden sm:block">
              <figure className="image mb-4">
                <img
                  src={logo}
                  className="logoimage relative w-[100px] top-[25px]"
                  alt="nav-logo"
                />
              </figure>
            </Link>
          </div>
          <div className="p-0 basis-1/2">
            <div className="lg:text-right sm:text-left">
              <p className="footer-title text-left sm:text-right">
                The One-stop Shopping Destination
              </p>
              <p className="footer-subtitle mt-5 text-left sm:text-right">
                High level variety of products with easy order and returns.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="icons-copyright mt-2 w-full text-white dark:text-black">
          <div className="has-text-centered-mobile">
            <p className="copyrights text-left sm:text-right pt-0 md:pt-6">
              ©2022 eComm. ALL RIGHTS RESESRVED
            </p>
          </div>
          <div className="lg:footer-icons-set flex gap-3  pt-4">
            <a
              href="https://www.instagram.com/the_prodigal_boy/"
              target="_blank"
              rel="noreferrer"
              className="nav-icons"
            >
              <FiInstagram style={{ fontSize: "26px" }} />
            </a>
            <a
              href="https://github.com/tarunverma3116"
              target="_blank"
              rel="noreferrer"
              className="nav-icons"
            >
              <FiGithub style={{ fontSize: "26px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-verma-a9a2201a4/"
              target="_blank"
              rel="noreferrer"
              className="nav-icons"
            >
              <FiLinkedin style={{ fontSize: "26px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
