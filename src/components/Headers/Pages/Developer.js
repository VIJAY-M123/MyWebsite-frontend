import React from 'react';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Row, Col, Button, Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import saravanan from "../../../Image/saravanan.jpg";
import Chandra from "../../../Image/Chandra.jpg";
import Selva from "../../../Image/Selva.jpg";
import Vijay from "../../../Image/Vijayraj.jpg";

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 350px;
width: 100%;

background: #3c8c97;
box-shadow: inset 7px 7px 14px #18383c,
            inset -7px -7px 14px #60e0f2;
color: #000000;
margin: 0 15px;
border-bottom-right-radius: 100px;
border-top-left-radius: 100px;

flex-direction:column;
`;

export default function Developer() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
        <div>
            <Carousel breakPoints={breakPoints} className="mt-5">

                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Chandra})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>IOS Developer</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>ChandraPandian</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>chandra@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>
                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Selva})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>CAD Designer</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>SelvaPandian</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>selva@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>
                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Vijay})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>ReactJS Developer</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>Vijayaraj</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>vijay@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>
                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Vijay})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>Production Manager</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>RajaPandian</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>raja@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>
                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Vijay})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>Revit Designer</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>Anandharaj</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>anand@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>
                <Item style={{ backgroundImage: "" }}>

                    <Row>
                        <Col>
                            <Card style={{
                                height: "80px", width: "80px",
                                backgroundImage: `url(${Vijay})`,
                                borderRadius: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>

                            </Card>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>Revit Designer</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p>Jeyapaul</p>

                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p>jeayapaul@gmail.com</p>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <Button className="TimeSheetButton">View</Button>
                        </Col>
                    </Row>

                </Item>






            </Carousel>
        </div>
    )
}

