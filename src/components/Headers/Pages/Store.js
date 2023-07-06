import React,{useState,useEffect} from 'react';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Row, Col, Button, Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import saravanan from "../../../Image/saravanan.jpg";
import Form from './Form';

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

function Store() {
    const [Data, setData] = useState([])

    //console.log("Data", Data);

    const [Open, setOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [phone, setphone] = useState(null)

    //console.log("phone",phone);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];


    useEffect(() => {
        fetch("http://localhost:5000/store")
            .then(Res => Res.json())
            .then(Result => setData(Result))
    })

    const submit = (item) => {
        //console.log("Phonenumber",item.phone);
        setOpen(true);
        setphone(item.phone);
    }
    const handleSubmit = () => {
        // Perform your submit logic here

        // Close the modal
        setOpen(false);
    };


    return (
        <div style={{paddingTop:"70px"}}>
            
             <Row>
                <Col className="d-flex justify-content-center ">
                    <h2>Sri Mutharamanan Traders !!!</h2>
                </Col>
            </Row>

            <Modal
                isOpen={Open}
                toggle={() => setOpen(!Open)}>
                <ModalHeader
                    toggle={() => setOpen(!Open)}
                >
                   Order
                </ModalHeader>
                <ModalBody>
                    <Form handleSubmit={handleSubmit} phone={phone}/>
                </ModalBody>
            </Modal>




            <Carousel breakPoints={breakPoints} className="mt-5">
                {
                    Data.map((item, index) => (
                        <Item style={{ backgroundImage: "" }} key={index}>

                            <Row>
                                <Col>
                                    <Card style={{
                                        height: "80px", width: "80px",
                                        backgroundImage: `url(${saravanan})`,
                                        borderRadius: "15%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                                    }}>

                                    </Card>

                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h4>{item.name}</h4>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <p>{item.owner}</p>

                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <p>{item.phone}</p>

                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col>
                                    <Button onClick={()=>submit(item)} className="TimeSheetButton">View</Button>
                                </Col>
                            </Row>

                        </Item>
                    ))
                }




            </Carousel>
        </div>
    )
}

export default Store