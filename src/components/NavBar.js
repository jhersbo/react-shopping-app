import React from "react";
import { 
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from '../generic-logo.png'


function NavBar(){
    return(
        <div>
            {/* <header>
                <h1>Cuckboi Shopping Network</h1>
                <Container>
                    <Container>

                    </Container>
                    <Nav variant="tabs" fill>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/products'>Products</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/categories'>Categories</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/cart'>Cart</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </header> */}
            <Navbar bg="light" expand='lg'>
                <Container>
                    <Navbar.Brand href="/">
                        {/* <img src={Logo} alt="logo" style={{'width': '20%'}}></img> */}
                        Generic Shopping Network
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to='/'>Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/products'>Products</Link>
                                </Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Toggle>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar