import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Favoritos } from "./component/favoritos.jsx";
import { Single } from "./views/single";
import {Characters} from "./views/characters"
import {Character} from "./views/character"
import {Planets} from "./views/planets"
import {Planet} from "./views/planet"
import {Intro} from "./views/intro"
import injectContext from "./store/appContext";

import { NavbarUp } from "./component/navbarUP.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favoritos, setFavoritos] = useState([]);

	const Favourites = (nombre) =>{
			setFavoritos(nombre)
		}

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarUp/>
					<Switch>
						<Route exact path="/">
							<Intro />
						</Route>
						<Route exact path="/menu">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters favoritos={Favourites} />
						</Route>
						<Route exact path="/characters/:idCharacter">			{/*Cuando llegues a esta direccion*/}
							<Character />										{/*Enséñame esto*/}
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planets/:idPlanet">
							<Planet />
						</Route>
						<Route exact path="/intro">
							<Intro />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
