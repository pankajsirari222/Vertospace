import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent Reload
    const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Logged In successfully", "success")
        }
        else{
            props.showAlert("Invalid credentials", "danger")
        }
  };
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

  return (
    <div className="login">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group>
          <h3 className="mt-3">Login Page</h3>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value= {credentials.email}
            onChange={onChange}
            name="email"
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </Form.Group>

        <Form.Group className="text-center">
          <Button variant="primary" type="submit" className="mb-3 text-center">
            Login
          </Button>
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Text className="text-muted">
            Doesn't have an account,
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "blue", fontSize: 16 }}
            >
              Register Here
            </Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
