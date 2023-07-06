import React, { useState } from "react";
//import { NavLink as Link } from 'react-router-dom';
import User from "../../Image/User.png";
import styled from 'styled-components';
// import {
//   Navbar, NavbarBrand, Nav, NavItem,
//   NavLink, Dropdown, DropdownToggle,
//   DropdownMenu, DropdownItem, NavMenu, Row, Col,
// } from "reactstrap";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./index.css";
import { useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";

import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';



// export const Nav = styled.nav`
//   background: #bdbdbd;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
//   /* Third Nav */
//   /* justify-content: flex-start; */
//  width:100% ;
// position:fixed;

// `;

// export const NavLink = styled(Link)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #ffffff;
//   }
// `;


// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;




export default function Navbar1(props) {

  //const {username} = useContext(UserContext);



  const username = localStorage.getItem('username');

  console.log("Naaa", username);

  const navigate = useNavigate()

  const [dropdownOpen, setDropdownOpen] = useState(false);



  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [ProfiledropdownOpen, ProfilesetDropdownOpen] = useState(false);
  const ProfiletoggleDropdown = () => ProfilesetDropdownOpen(!ProfiledropdownOpen);



  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  const Logout = () => {
    localStorage.removeItem('username');

    navigate("/login");

  }


  return (
    <div style={{ position: "fixed", width: "100%", zIndex: "99" }}>

      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand><GiLindenLeaf size={40} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/image">Image</Nav.Link>
              <Nav.Link href="/video">Video</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/todo">ToDo</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/stores">Traders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </div>
  )
}