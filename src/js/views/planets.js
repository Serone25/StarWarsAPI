import React, { useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Favoritos } from "../component/favoritos.jsx";

 export const Planets = () => {


	const [planetList, setPlanetList] = useState([]);
	const url="https://starwars-visualguide.com/assets/img/planets/";
	const finJpg=".jpg";

	useEffect(() =>{
		fetch("https://swapi.dev/api/planets/")
		.then(response => {
			response.json()									//el metodo json tb en asíncrono por lo que hay que esperar con otro then
			.then(response => {
				//setLoading(false)
				console.log(response)
				setPlanetList(response.results)
				
			})
		})
		.catch(function(error){
			console.log(error)
		})
	},[])

	return(
		<>
			<Favoritos/>
			<Navbar/>
			<div className="text-center cuerpo">
				<h1>PLANETAS</h1>
				<div className="row">{planetList.map((element,index) =>
					<div className="col-4 ">
						{index = index+1}
						<div className="card">
							<img src={url+index+finJpg} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{element.name}</h5>
								<p className="card-text">Population: {element.population}</p>
								<p className="card-text">Terrain: {element.terrain}</p>
								<Link to={"/planets/"+ index}>
									<span className="btn btn-success">Learn More</span>
								</Link>
							</div>
						</div>
					</div>
				)}</div>
			</div>
		</>
	)
	};
