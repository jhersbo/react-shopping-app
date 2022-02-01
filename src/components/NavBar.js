import React from "react";
import { 
    Container,
    Nav,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBar(){
    return(
        <div>
            <header>
                <h1>Cuckboi Shopping Network</h1>
                <Container>
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
            </header>
        </div>
    )
}

export default NavBar