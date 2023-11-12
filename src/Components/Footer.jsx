import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#232f3e] w-[184%] lg:w-full md:w-screen text-white mt-3 ">
      <div className=" px-56 ">
        <Row className="w-full  mb-5 flex justify-center ">
          <Col className="flex flex-col  mt-5">
            <h6 className="font-bold">Get to know us</h6>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              About Us
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Careers
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Press Releases
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Amazon Science
            </Link>
          </Col>
          <Col className="flex flex-col  mt-5">
            <h6 className="font-bold">Connect with us</h6>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Facebook
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Twitter
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Instagram
            </Link>
          </Col>
          <Col className="flex flex-col mt-5">
            <h6 className="font-bold">Get to know us</h6>
            <Link className="no-underline text-white font-light hover:underline w-fit ">
              Sell on Amazon
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Sell under Amazon Accelerator
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Protect and Build Your Brand
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Amazon Global Selling
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Become an Affiliate
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Fulfilment by Amazon
            </Link>
          </Col>
          <Col className="flex flex-col  mt-5  ">
            <h6 className="font-bold">Let Us Help You</h6>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              COVID-19 and Amazon
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Your Account
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Returns Centre
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              100% Purchase Protection
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Amazon App Download
            </Link>
            <Link className="no-underline text-white font-light hover:underline w-fit">
              Help
            </Link>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="flex justify-center">
        <img
          className="h-8 w-24 mt-3"
          src="http://localhost:3000/images/amazon.png"
          alt="amazon"
        />
      </div>
      <div className="flex justify-center lg:p-3 px-5 lg:text-base md:text-base space-x-5 text-xs">
        <p className="hover:underline cursor-pointer">Italy</p>
        <p className="hover:underline cursor-pointer">China</p>
        <p className="hover:underline cursor-pointer">Brazil</p>
        <p className="hover:underline cursor-pointer">Canada</p>
        <p className="hover:underline cursor-pointer">France</p>
        <p className="hover:underline cursor-pointer">Germany</p>
        <p className="hover:underline cursor-pointer">Japan</p>
        <p className="hover:underline cursor-pointer">Australia</p>
        <p className="hover:underline cursor-pointer">Mexico</p>
        <p className="hover:underline cursor-pointer">Netherlands</p>
        <p className="hover:underline cursor-pointer">Poland</p>
        <p className="hover:underline cursor-pointer">Singapore</p>
        <p className="hover:underline cursor-pointer">Spain</p>
        <p className="hover:underline cursor-pointer">Turkey</p>
        <p className="hover:underline cursor-pointer">UAE</p>
      </div>
    </div>
  );
}

export default Footer;
