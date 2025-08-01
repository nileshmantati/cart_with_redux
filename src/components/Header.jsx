import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

function Header() {
    const cart = useSelector(state => state.cart);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='fs-4'>E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex column-gap-3">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/cart">Cart ({itemCount})</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;