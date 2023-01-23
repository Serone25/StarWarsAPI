import React, { useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Favoritos } from "../component/favoritos.jsx";

 export const Characters = (Favourites) => {

	const [characterList, setCharacterList] = useState([]);
	const url="https://starwars-visualguide.com/assets/img/characters/";
	const finJpg=".jpg";

	const[favoritos, setFavoritos] = useState([])

	useEffect(() =>{
		fetch("https://swapi.dev/api/people/")
		.then(response => {
			response.json()									//el metodo json tb en asíncrono por lo que hay que esperar con otro then
			.then(response => {
				//setLoading(false)
				console.log(response)
				setCharacterList(response.results)
				{console.log(favoritos)}
			})
		})
		.catch(function(error){
			console.log(error)
		})
	},[favoritos])

	return(
		<>
			<Favoritos/>
			<Navbar/>
			<div className="cuerpo">
				<div className="text-center">
					<h1>PERSONAJES</h1>
					<div className="row">{characterList.map((element,index) =>
						<div className="col-2 ">
							{index = index+1}
							<div className="card">
								<img src={url+index+finJpg} className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text">Gender: {element.gender}</p>
									<p className="card-text">Hair Color: {element.hair_color}</p>
									<p className="card-text">Eye Color: {element.eye_color}</p>
									<Link to={"/characters/"+ index}>								{/* Mándame a esta dirección en el navegador*/}
										<span className="btn btn-danger">Learn More</span>
									</Link>
									<button onClick={ () => {setFavoritos([...favoritos, element.name]), Favourites(favoritos)}}>Favs</button>
									<Favoritos nombre = {favoritos}/>
								</div>
							</div>
						</div>
					)}</div>
				</div>
			</div>
		</>
	)
	};