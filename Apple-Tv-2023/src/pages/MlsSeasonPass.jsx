import Carousel from "../components/Carousel";
import { Image, Box, Spacer } from "@chakra-ui/react";
import jsonData from "../data.json";
import CarouselMultipleSlides from "../components/carouselMultipleSlides";
export default function MlsSeasonPass() {
	return (
		<>
			<Carousel arr={jsonData.mls_main} />
			<CarouselMultipleSlides
				arr={jsonData.team}
				heading={"Live and Upcoming"}
				flag={true}
			/>
			<Box
				paddingTop={"20%"}
				backgroundImage={"src/assets/images/mls_pass/cover5.webp"}
				backgroundSize={"cover"}
			>
				<Spacer />
				<Spacer />
				<Spacer />
				<CarouselMultipleSlides flag={true} arr={jsonData.cam} />
			</Box>
			<Carousel arr={jsonData.cover} />
			
			<CarouselMultipleSlides
				arr={jsonData["new-releases"]}
				heading={"Most watched "}
			/>
			<CarouselMultipleSlides
				arr={jsonData.premium}
				heading={"Available for free"}
			/>
			
			<Carousel arr={jsonData.coverSlider1} width={"85%"} marginTop={"2rem"} />
		</>
	);
}
