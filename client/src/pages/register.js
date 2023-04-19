import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Register = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    cnfpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent Reload
    const { name, email, phoneNo, password, cnfpassword } = credentials;
    if (password !== cnfpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }
  
    const response = await fetch("http://localhost:8000/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phoneNo, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account created successfully", "success")
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <Form onSubmit={handleSubmit} className="register-form">
        <Form.Group>
          <h3 className="mt-3">Register</h3>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="name"
            onChange={onChange}
            minLength={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNo">
          <Form.Label>Enter Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            onChange={onChange}
            name="phoneNo"
            required
            minLength={10}
            maxLength={10}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={onChange}
            name="password"
            required
            minLength={5}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password again"
            onChange={onChange}
            name="cnfpassword"
            required
            
            minLength={5}
          />
        </Form.Group>

        <Form.Group className="text-center">
          <Button variant="primary" type="submit" className="mb-3 text-center">
            Register
          </Button>
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Text className="text-muted">
            Already Have an Account,
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "blue", fontSize: 16 }}
            >
              {" "}
              Login Here{" "}
            </Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Register;
