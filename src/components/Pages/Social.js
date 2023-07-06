import React from "react";
import { Tab,Tabs } from "react-bootstrap";
import Social1 from "./Social Campaign1";
import Social2 from "./Social Camapign2"

export default function social(){
    return(
        <div className="p-3 mt-3">
            <Tabs>
                <Tab eventKey="social1" title="Social Media Campaign">
                     <Social1/>  
                </Tab>
                <Tab eventKey="social2" title="Social Media Tracking Report">
                     <Social2/>   
                </Tab>
            </Tabs>
        </div>
    );
}