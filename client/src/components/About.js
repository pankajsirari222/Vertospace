import React, { useContext, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import noteContext from "../context/notes/noteContext";

const About = () => {
  return (
    <>
      <div>This is About page</div>
      <section id="about">
        <Container>
          <Row>
            <Col>
              <h2>About My College</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat aliquam urna, sed hendrerit odio hendrerit a. Nam id
                mauris euismod, pretium nunc ac, lobortis sapien. Morbi euismod
                tellus eget lorem consectetur, quis porttitor nibh bibendum.
              </p>
              <p>
                Nunc lacinia consectetur pharetra. Integer dapibus nulla at erat
                venenatis posuere. Duis nec felis ac mauris placerat tincidunt.
                Proin eleifend nisl nec ante consequat, id auctor quam
                tincidunt. Integer eu leo eget orci faucibus rutrum non non ex.
              </p>
            </Col>
            <Col>
              <img src="about-image.jpg" alt="About" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
