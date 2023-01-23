import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import starWarsImage from '../../img/starwars.png'

import "../../styles/home.css"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"


export const NavbarUp = () => {
	return (
		<nav className="navbar">
            <Container className="Row" fluid>
                
                    <Col sm={5}>
                        <Navbar.Brand href=""><FaFacebook/></Navbar.Brand>
                        <Navbar.Brand href=""><FaTwitter/></Navbar.Brand>
                        <Navbar.Brand href=""><FaInstagramSquare/></Navbar.Brand>
                        <Navbar.Brand href=""><FaYoutube/></Navbar.Brand>
                    </Col>
                    <Col sm={7}>  <Link to="/Menu">
					        <Image className="starWarsImage" src={starWarsImage}></Image>
				            </Link>
                    </Col>
            </Container>
		</nav>
	);
};