import React, { useEffect } from "react";
import Stores4 from "../../../Image/store4.jpg";
import Stores1 from "../../../Image/store1.jpg";
import Stores3 from "../../../Image/store3.jpeg";


import { Col, Row } from "reactstrap";
import "../Style.css";
import { useState } from "react";

export default function Home() {
       const imageList = [Stores3, Stores4]
       const [background, setbackground] = useState(Stores4);

       useEffect(()=>{

       


        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * imageList.length);
            const newImage = imageList[randomIndex];
            setbackground(newImage);
          }, 2000);
        
          return () => {
            clearInterval(interval);
          };

       },[])

    return (
        <div>
            <div className="home" style={{height:"100vh", width:"100%", paddingTop:"6%",
             backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:""}}>
                

                <Row>
                    <Col>
                      <h1 className="heading"> Sri Mutharamanan Traders </h1>
                    </Col>
                </Row>
                <p className="p">Welcome to the Waste Iron & Paper Buying Shop. </p>
            </div>

        </div>
    )
}