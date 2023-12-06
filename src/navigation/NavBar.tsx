import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

interface NavContainerProps {
    path: string;
    title: string;
}

function NavContainer({ path, title }: NavContainerProps) {
    return (
        <LinkContainer to={path}>
            <NavItem>{title}</NavItem>
        </LinkContainer>
    );
}

function NavigationBar(): JSX.Element {
    return (
        <Navbar>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='nav-links'>
                    <NavContainer path="/" title="Home" />
                    <NavContainer path="/diet" title="Diet" />
                    <NavContainer path="/depression" title="Depression" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

// For later
// const NavbarWithRouter = withRouter(NavigationBar);

export default NavigationBar;