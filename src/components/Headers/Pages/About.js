import React from 'react'
import { Card, Col, Row } from 'reactstrap'

function About() {
    return (
        <div>
          

            <Row className='p-5'>
                <Col>
                    <Row>
                        <Col>
                            <h4 style={{ color: "white" }}>Email:</h4>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: "65px" }}>
                        <Col>
                            <p style={{ color: "white" }}>
                                java7401546493@gmail.com
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} className=''>
                    <Row>
                        <Col>
                            <h4 style={{ color: "white" }}>Address:</h4>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: "65px" }}>
                        <Col>
                            <p style={{ color: "white" }}>
                                Vijayaraj Muthuraman <br /> 7/14 North Street, <br /> Thiruvenkadapuram, <br /> Theripanani-600701.
                            </p>
                        </Col>
                    </Row>





                </Col>
            </Row>

        </div>
    )
}

export default About