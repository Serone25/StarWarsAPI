import React from "react";
import StarWarsIntro from "../../img/star-wars-intro.png";
import starWarsImage from "../../img/starwars.png"
import { Link } from "react-router-dom";
import StarWarsIntroBack from "../../img/starWars2.jpg"




import "../../styles/intro.css"

export const Intro = () =>{
    return(
    <>
    <audio src="../../audio/bso.mp3" type="audio/mp3" autoPlay></audio>
        <div className="star-wars-intro">
            <p className="intro-text">
                A few days ago, during...
            </p>
            <h2 className="main-logo">
                <img src={StarWarsIntro}/>
            </h2>

            <div className="main-content">

                <div className="title-content">
                    <p className="content-header">REACT<br/>El Comienzo de la Pesadilla</p>
                    <br/>
                    <p className="content-body">
                        After years of galactic silence, civilization is on the brink of a new Star Wars release. Now, with the Force preparing to awaken, the people of Earth seek solace in films of old. With nowhere to turn, they gather in great numbers and watch the original trilogy without rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation.
                    </p>
                    <p className="space-button">
                        <Link to="/menu">
                            <img src={starWarsImage}/>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}