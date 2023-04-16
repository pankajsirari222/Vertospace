import React from "react";

import { Container} from "react-bootstrap";

const About = () => {
  return (
    <>
      <div id="about">
        <Container>
              <h2>About Us</h2>
              <br/>
              <p>
                Welcome to Vertospace designed for college students!
                This project is aimed at providing an efficient and
                user-friendly platform for students to upload and download
                files, as well as create, read, update and delete their notes.
                With our intuitive interface, students can easily access and
                manage their academic resources on our website. To ensure the
                security of user data, we have implemented a login functionality
                that requires authentication before accessing any features.
                Additionally, we have incorporated form validation to ensure
                that all inputs are accurate and complete. Our MERN Stack
                project leverages the power of MongoDB, Express, React, and
                Node.js, making it a robust and scalable solution for managing
                academic resources. We hope that our project will provide
                students with a convenient and streamlined experience, enhancing
                their academic journey.
              </p>
        </Container>
      </div>
    </>
  );
};

export default About;
