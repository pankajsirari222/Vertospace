import React from "react";
import { Button, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="main about">
        <Card className=" w-50 text-center m-auto">
          <Card.Header>About Us</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              Welcome to Vertospace designed for college students! This project
              is aimed at providing an efficient and user-friendly platform for
              students to upload and download files, as well as create, read,
              update and delete their notes. With our intuitive interface,
              students can easily access and manage their academic resources on
              our website. To ensure the security of user data, we have
              implemented a login functionality that requires authentication
              before accessing any features. Additionally, we have incorporated
              form validation to ensure that all inputs are accurate and
              complete. Our MERN Stack project leverages the power of MongoDB,
              Express, React, and Node.js, making it a robust and scalable
              solution for managing academic resources. We hope that our project
              will provide students with a convenient and streamlined
              experience, enhancing their academic journey.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default About;
