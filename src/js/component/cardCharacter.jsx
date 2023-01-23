import React from "react";

const CardCharacter = ({imagen, nombre,anioNacimiento,altura,peso }) =>{

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Año de Nacimiento: {anioNacimiento}</p>
                            <p className="card-text">Altura: {altura}</p>
                            <p className="card-text">Peso: {peso}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>)}
    
export default CardCharacter;
