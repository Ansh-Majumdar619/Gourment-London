import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Gourmet London, where culinary artistry meets timeless elegance. Nestled in the heart of London, we are dedicated to offering a dining experience that is both sophisticated and unforgettable.

              At Gourmet London, our mission is to celebrate the rich tapestry of flavors that define the finest of British and international cuisine. Our talented chefs craft each dish with passion and precision, using only the freshest, locally-sourced ingredients to ensure a menu that is both innovative and rooted in tradition.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;