import {Button, Form, Container} from "react-bootstrap";
import '../App.css'
import {IconContext} from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    return ( 
      <div className="contact">
        <Container
      style={{ maxWidth: "35vw" }}
    > 
        <br/>
        <br/>
        <Form>
        <h1 className="heading2">Contact Here</h1>    
          <Form.Group controlId = "formBasicName">           
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" minLength={3} required />
          </Form.Group>
        <br/>
         <Form.Group controlId="formBasicEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter your email" required/>
         </Form.Group>
        <br/>
        <Form.Group controlId="formBasicTextArea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Type your message here..." minLength={8} required/>
        </Form.Group>
        <br/>
        <Button variant="success" type="submit">Submit
        </Button>
        <br/>
        <h4 className="heading2"> Also, Connect With Us at... </h4>
        <br/>
        <div className='d-flex align-items-center'>
      <IconContext.Provider value={{size: 20}}>
      <p className="nav-item mx-5 " ><a href="#"><FaTwitter/></a></p>
      <p className="nav-item mx-5"><a href="#"><FaInstagram/></a></p>
      <p className="nav-item mx-5"><a href="#"><FaLinkedin/></a></p>
      <p className="nav-item mx-5"><a href="#"><SiGmail/></a></p>
      </IconContext.Provider>
      </div>
      </Form>
      
      </Container>
    </div>
     );
}
 
export default Contact;