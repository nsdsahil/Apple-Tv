import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "./App.css";

import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import MlsSeasonPass from "./pages/MlsSeasonPass";
import LandingDevices from "./components/LandingDevices";
import SeasonPassPoster from "./components/SeasonPassPoster";

function App() {
	return (
		<>
			<Navbar />
			<Box p={{base:3,md:0,lg:0,xl:0}}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="MlsSeasonPass" element={<MlsSeasonPass />} />
			</Routes>
            <SeasonPassPoster/>
			<LandingDevices />
			<Footer />
			</Box>
		</>
	);
}

export default App;
