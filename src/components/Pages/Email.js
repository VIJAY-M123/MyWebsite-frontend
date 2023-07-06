import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Emailcamapaign from "./Email Campaign Report";
import EmailCamapign1 from "./Email Campaign1"
import EmailCamapign2 from "./Email Campaign2";
import EmailCamapign3 from "./Email Campaign3";
import EmailCamapign4 from "./EmailCampaign4"

export default function Email1(){

   const[Count,setCount]=useState(0);
   

    return(
        <div className="mt-3 p-3" style={{backgroundColor:""}}>
            <Tabs defaultActiveKey="email">
                <Tab eventKey="email" title="Email Campaign Report">
                     <Emailcamapaign/>
                </Tab>
                {/* <Tab eventKey="email1" title="Email Analytics Design">
                     <EmailCamapign1/>
                </Tab>
                <Tab eventKey="email2" title="Email Average Rates">
                     <EmailCamapign2/>
                </Tab>
                <Tab eventKey="email3" title="Email Bounce Rate">
                     <EmailCamapign3/>
                </Tab> */}
                <Tab eventKey="email4" title="Mass Email Performance Report">
                     <EmailCamapign4/>
                </Tab>
            </Tabs>
        </div>
    );
}