import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.css";


export const Character = () =>{

    const params = useParams();

    const[character, setCharacter] = useState([])

    useEffect(() =>{
		fetch("https://swapi.dev/api/people/"+params.idCharacter)
		.then(response => {
			response.json()									//el metodo json tb en asíncrono por lo que hay que esperar con otro then
			.then(response => {
				console.log(response)
                setCharacter(response)
			})
		})
		.catch(function(error){
			console.log(error)
		})
	},[])

    let fotoPersonaje = parseInt(params.idCharacter +1);

    return (
        <>
            <div className="card cuerpo">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.idCharacter+".jpg"} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-10 tarjeta">
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">Año de nacimiento: {character.birth_year}</p>
                            <p className="card-text">Altura: {character.height}</p>
                            <p className="card-text">Color de pelo: {character.hair_color}</p>
                            <p className="card-text">Peso: {character.mass}</p>
                            <p className="card-text">Genero: {character.gender}</p>
                            <p className="card-text">Color de piel: {character.skin_color}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>)
}