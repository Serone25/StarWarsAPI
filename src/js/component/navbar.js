import React from "react";
import { Link } from "react-router-dom";
import "../../styles/botones.css"

export const Navbar = () => {
	return (
		<nav className="navbar">
			<>	
				<div className="row container-fluid">
					<div className="col text-center" >
						<Link to="/characters">
							<button className="botonPersonajes">PERSONAJES</button>
						</Link>
					</div>
					<div className="col text-center">
						<Link to="/planets">
						<button className="botonPlanetas">PLANETAS</button>
						</Link>
					</div>
					<div className="col text-center">
						<Link to="/intro">
						<button className="botonIntro">INTRO</button>
						</Link>
					</div>
				</div>
			</>
		</nav>
	);
};
