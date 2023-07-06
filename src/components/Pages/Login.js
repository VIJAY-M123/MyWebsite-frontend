import React from "react";
import { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { getDataGroupBy } from "rsuite/esm/utils";
import "./Pages.css";
import { useNavigate } from "react-router";
import { GiLindenLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";
import Navbar1 from "../Headers/Navbar";
import { useContext } from "react";
import { UserContext } from "../../App";


export default function Login() {
  const navigate = useNavigate()



  const { setUsername } = useContext(UserContext);



  const url = "http://localhost:5000/login";

  const [data, setdata] = useState({
    Email: "",
    Password: ""
  })

  const [Error, SetError] = useState('');

  function submit(e) {
    e.preventDefault();


    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.Email,
        password: data.Password
      })
    }).then(res => res.json())
      .then(result => {
        console.log("Sucess", result.message);
        console.log("Sucess", result.username);


        // setUsername(result.username);


        if (result.username) {
          localStorage.setItem('username', result.username);
          navigate("/main")
        }
        else if (result.error) {
          console.log("Error", result.error);
          SetError(result.error);
        }

      })
  }

  //console.log("Username",Username);

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.name] = e.target.value
    setdata(newdata);
    console.log(newdata);
  }


  return (
    <div className="main">

      <div className="cards">
        <Row>
          <Col>
            <GiLindenLeaf size={60} color="#000000" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="" style={{ marginLeft: "" }}>
            <h6>Don't have an Account?<Link className="signup" to="/register"> Sign Up</Link></h6>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h1>SignIn</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <input className="input" type="email" name="Email" placeholder="Email" value={data.Email} onChange={(e) => handle(e)} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <input className="input" type="password" name="Password" placeholder="Password" value={data.Password} onChange={(e) => handle(e)} />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="forget" style={{ marginLeft: "176px" }}>
            <Link className="signup" to="/forget">Forget Password?</Link>
          </Col>
        </Row>

        {Error.length > 0 && <div style={{ marginTop: "10px", color: "red" }}>
          {Error}
        </div>
        }
        <Row className="mt-5">
          <Col>
            <Button className="Submit" onClick={submit}>Login</Button>
          </Col>
        </Row>


      </div>
    </div>
  )
}