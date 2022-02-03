import React from "react";
import { 
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function NavBar(){
    let textMatch = {
        textDecoration: 'none',
        'color': '#181819',
    }

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Generic Shopping Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link>
                            <Link className="darken" to='/products' style={{
                                textDecoration: 'none', 
                                'color': '#707071'
                                }} >Products</Link>
                        </Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/category1' style={textMatch}>Category 1</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/category2' style={textMatch}>Category 2</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/category3' style={textMatch}>Category 3</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/category4' style={textMatch}>Category 4</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                        <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/cart' style={textMatch}>Cart</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                        <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/user' style={textMatch}>My Account</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar