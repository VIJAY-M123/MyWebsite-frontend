import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Row, Col, Button, Card, Modal, ModalBody, ModalHeader } from "reactstrap";

import Form from "./Form";
import Tech1 from "../../../Image/Tech2.jpg";
import Developer from "./Developer";
import About from "./About";
import "../index.css";
import dashboard from "../../../Image/dashboard.png"
import { useNavigate } from "react-router-dom";




export default function Home() {
    const navigate = useNavigate();

    const view = () => {
        //navigate("/templates")

        const url = 'https://zippy-sherbet-332f3a.netlify.app/'; // Replace with your desired URL
        window.open(url, '_blank');
    }

    return (
        <div style={{ paddingTop: "5%", backgroundColor: "#3c8c97", height: "100vh", overflowX: "hidden" }}>

            <div style={{
                backgroundColor: "", height: "600px", backgroundImage: `url(${Tech1})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>


                <Row>
                    <Col lg={8}>

                        <p className="title">React website</p>
                        <p className="subtitle">React Js using build reusable User Interface !!!</p>


                    </Col>
                    <Col lg={3} className="col3">
                        <Card className=" cardpreview d-flex justify-content-end align-items-center" style={{
                            backgroundImage: `url(${dashboard})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover", height: "200px",marginTop:"40px"
                        }}>

                            <button className="previewbtn" 
                                onClick={view}>Live Preview</button>

                        </Card>

                    </Col>


                </Row>
            </div>
            <div>
                <Developer />

            </div>
            <div style={{ backgroundColor: "black" }}>
                <About />
            </div>


        </div>
    )
}