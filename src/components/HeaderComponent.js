import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" className="fixed-top" dark expand="md">
				<div className="container">
					<NavbarBrand className="me-auto" href="/">
						<p>
							<img src="/assets/KaboomInvadersLogoLarge.png" className="responsive-img" alt="Kaboom Invaders"></img>
						</p>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ms-auto" navbar>
							<NavItem>
								<NavLink className="nav-link align-middle" href="/">
									<Button color="link">Home</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link align-middle" href="/#about">
									<Button color="link">About</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link align-middle" href="/#rules">
									<Button color="link">Rules</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link align-middle" href="/#demo">
									<Button color="link">Demo</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link align-middle" href="/#developer">
									<Button color="link">Developer</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" href="https://kaboom-invaders-game.netlify.app/">
									<Button outline className="play" color="warning">
										Play Game!
									</Button>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Header;
