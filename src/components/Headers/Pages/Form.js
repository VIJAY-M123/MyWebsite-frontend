import React, { useState } from "react";
import { CardBody, Col, Card, CardHeader, Row, Button } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai"
import "../index.css";

export default function From({ handleSubmit,phone}) {
    console.log("SelectedPerson", phone);
    const [Data, setData] = useState({
        Name: "",
        Phone: "",
        Address: "",


    })

    //console.log("D", Data);
    const Handle = (e) => {

        setData({ ...Data, [e.target.name]: e.target.value })

    }
    const Submit = (e) => {
        e.preventDefault();
        handleSubmit(Data);

        fetch("",
        {
         method:"POST",
         headers:{
            "Content-Type" : "application/json"
         },
         body:JSON.stringify({
            name:Data.Name,
            phone:Data.Phone,
            address:Data.Address
         })
        })

        setData({
            Name: "",
            Phone: "",
            Address: "",
            
        });

    }





    return (
        <div>


            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <input type="text"
                    placeholder="Customer Name"
                    name="Name"
                    value={Data.Name}
                    onChange={Handle} />

                <input className="mt-2"
                    type="tel"
                    placeholder="Phone Number"
                    name="Phone"
                    value={Data.Phone}
                    onChange={Handle}

                />
                <textarea className="mt-2"
                    name="Address"
                    placeholder="Address"
                    rows="4"
                    cols="40">

                </textarea>



                <Button className="mt-2" onClick={Submit}>Submit</Button>
            </form>

        </div>
    )
}