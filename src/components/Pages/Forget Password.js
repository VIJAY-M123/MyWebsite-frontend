import React, { useState } from "react";
import "./Pages.css";
import { Row, Col, Card, Button } from "reactstrap";
import { GiLindenLeaf } from "react-icons/gi";
import { useNavigate } from "react-router";

export default function Forget() {
    const navigate = useNavigate()

    const url = "http://localhost:5000/forget";

    const [data, setdata] = useState({
        Email:"",
        Password: "",
        ConformPassword: ""
    })



    console.log("Datra", data);

    function submit(e) {
        e.preventDefault();


        if (data.Password === data.ConformPassword) {

            console.log("Password Match!!!");
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.Email,
                    conformpassword: data.ConformPassword
                })
            }).then(res => res.json())
                .then(result => {
                    console.log("Sucess", result.message);
                    navigate("/main")
                })

        }
        else {
            console.log("Password and conform password not match");
        }

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
                        <GiLindenLeaf size={60} color="#000000" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h1>Forget Password</h1>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <input className="input" type="text" name="Email" placeholder="Email" value={data.Email} onChange={(e) => handle(e)} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <input className="input" type="password" name="Password" placeholder="Password" value={data.Password} onChange={(e) => handle(e)} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <input className="input" type="password" name="ConformPassword" placeholder="Conform Password" value={data.ConformPassword} onChange={(e) => handle(e)} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Button className="Submit" onClick={submit}>Submit</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}