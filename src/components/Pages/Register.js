import Raect, { useEffect } from "react"
import { Row, Col, Button } from "reactstrap";
import { useState } from "react";
import {FaCanadianMapleLeaf} from "react-icons/fa"
import {GiLindenLeaf} from "react-icons/gi";
import "./Pages.css";
import { useNavigate } from "react-router";

export default function Register() {

  const navigate = useNavigate();
  const url = "http://localhost:5000/register";

  const [data, setdata] = useState({
    Name: "",

    Email: "",
    Password: ""
  })

  

  function submit(e) {
    e.preventDefault();



    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.Name,

        email: data.Email,
        password: data.Password
      })
    }).then(res=>res.json())
    .then(Result=>{
      console.log("Res",Result.message)
      navigate('/');
    })
  }

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
          <GiLindenLeaf size={60} color="#000000"/>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h1>SignUp</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <input className="input" type="text" name="Name" placeholder="Username" value={data.Name} onChange={(e) => handle(e)} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <input className="input"   type="email" name="Email" placeholder="Email" value={data.Email} onChange={(e) => handle(e)} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <input className="input"  type="password" name="Password" placeholder="Password" value={data.Password} onChange={(e) => handle(e)} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button className="Submit" onClick={submit}>Register</Button>
          </Col>
        </Row>


      </div>
    </div>
  );
} 