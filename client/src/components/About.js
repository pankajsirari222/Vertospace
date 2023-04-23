import React from "react";
import { Button, Card } from "react-bootstrap";
import aboutimg from '../images/about-us.jpg'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="lcol">
          <img src={aboutimg} alt="About" />
        </div>
        <div className="rcol">
          <div className="about-heading">About Us</div>
          <div className="about-content">
            <p>Welcome to <strong>Vertospace</strong> designed for college students! This project
              is aimed at providing an efficient and user-friendly platform for
              students to upload and download files, as well as manage their notes using CRUD operations.
              </p>
              <p>With our intuitive interface,
              students can easily access and manage their academic resources on
              our website.</p>
              <p>Our MERN Stack project leverages the power of MongoDB,
              Express, React, and Node.js, making it a robust and scalable
              solution for managing academic resources. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
