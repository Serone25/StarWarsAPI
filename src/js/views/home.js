import React from "react";
import { Navbar } from "../component/navbar";
import {Favoritos} from "../component/favoritos.jsx"
import "../../styles/home.css";
import starWars1 from "../../img/starWars1.jpg"
import starWars2 from "../../img/starWars2.jpg"
import starWars3 from "../../img/starWars3.jpg"

export const Home = () => (
	<>	
		<Favoritos/>
		<Navbar/>
		<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active" data-bs-interval="2000">
					<img src={starWars1} className="imagenCarrusel" alt="..."/>
				</div>
				<div className="carousel-item" data-bs-interval="2000">
					<img src={starWars2} className="imagenCarrusel" alt="..."/>
				</div>
				<div className="carousel-item" data-bs-interval="2000">
					<img src={starWars3} className="imagenCarrusel" alt="..."/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	</>
);
