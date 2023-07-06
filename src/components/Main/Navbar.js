import React,{useState} from "react";
import styled from 'styled-components';
import {
    Navbar, NavbarBrand, Nav, NavItem,
    NavLink, Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem, NavMenu, Row, Col
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import "./Style.css";
import { GiLindenLeaf } from "react-icons/gi";

const SidebarNav = styled.nav`
  background: #bdbdbd;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export default function Naa() {
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <Navbar className="MainNav" expand="md">
                <div className="bars">
                    <FaBars size={20} onClick={showSidebar} />
                </div>

                <NavbarBrand href="/"><GiLindenLeaf size={40}/></NavbarBrand>
                <Nav className="ml-auto" navbar>


                   
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>

                </Nav>


            </Navbar>
            <SidebarNav sidebar={sidebar}>
                <Nav className="ml-auto" navbar>


                
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>

                </Nav>
            </SidebarNav>
        </div>
    )
}