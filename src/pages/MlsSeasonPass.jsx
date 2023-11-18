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
				backgroundImage={"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/0b/fd/5b/0bfd5b6a-542c-0eb7-b28a-f55ef80d5b45/70d1d530-d899-48e9-a51b-e2ef0379bffc.png/1320x495sr.webp"}
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
