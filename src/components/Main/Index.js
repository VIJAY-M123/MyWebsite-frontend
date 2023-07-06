import React from "react";
import Naa from "./Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Main";

export default function Indexs(){
    return(
        <div>
            <Naa/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}