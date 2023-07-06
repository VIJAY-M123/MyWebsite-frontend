import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import User from "../../../Image/person.png"
import "../index.css";

export default function Main() {
    return (

        <div style={{
            backgroundColor: "#e0e0e0",
            padding: "1%", display: "flex",paddingTop:"6%",
            flexDirection: "column", overflowX: "hidden", paddingLeft: "1%", paddingRight: "1%"
        }}>
            <div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardImg src={User} height={200} />
                            </CardHeader>

                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardImg src={User} height={200} />
                            </CardHeader>

                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardImg src={User} height={200} />
                            </CardHeader>

                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Card>
                            <CardImg src={User} height={200} />
                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg src={User} height={200} />
                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg src={User} height={200} />
                            <CardBody>
                                <CardTitle>Welcome</CardTitle>
                                <CardText> This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    )
}