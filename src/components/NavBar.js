import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar() {
	return (
		<React.Fragment>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">MilkBar</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Add Milk</Nav.Link>
						<NavDropdown title="See Milks" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Milk 1</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Milk 2</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Milk 3</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Milk of the Day
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
}

export default NavBar;
