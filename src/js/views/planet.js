import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.css";


export const Planet = () =>{

    const params =useParams();

    const[planet, setPlanet] = useState({})

    useEffect(() =>{
		fetch("https://swapi.dev/api/planets/"+params.idPlanet)
		.then(response => {
			response.json()									//el metodo json tb en asíncrono por lo que hay que esperar con otro then
			.then(response => {
				console.log(response)
                setPlanet(response)
			})
		})
		.catch(function(error){
			console.log(error)
		})
	},[])

    
    return (
        <>
            <div className="card  cuerpo">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/"+ params.idPlanet+".jpg"} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">Clima: {planet.climate}</p>
                            <p className="card-text">Creado: {planet.climate}</p>
                            <p className="card-text">Diametro: {planet.diameter}</p>
                            <p className="card-text">Poblacion: {planet.population}</p>
                            <p className="card-text">Terreno: {planet.terrain}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>)
}