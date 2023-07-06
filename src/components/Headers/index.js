import React from "react"
import { Route, Routes } from "react-router";
import Main from "./Pages/Main";
import Navbar1 from "./Navbar"
import Mainpage from "../../MainPage";
import Todo from "./Pages/TodoList";
import Home from "./Pages/Home";
import Store from "./Pages/Store";

export default function Index() {
    return (
        <div>



            <Navbar1 />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image" element={<Main />} />
                <Route path="/todo" element={<Todo />} />

                <Route path="/main" element={<Home />} />
                <Route path="/stores" element={<Store/>} />
            </Routes>

        </div>
    )
}