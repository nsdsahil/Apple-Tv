import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CarouselMultipleSlides from "../components/carouselMultipleSlides";
import jsonData from "../data.json";
import Cover from "../components/Cover";
import SeasonPassPoster from "../components/SeasonPassPoster";
import Qna from "../components/qna";
import LandingDevices from "../components/LandingDevices";
import AccordionExample from "../components/dynamicAccordion";
import AccordionWithImage from "../components/dynamicAccordion";
import { Footer } from "../components/footer";
import { useBreakpointValue,Box } from "@chakra-ui/react";
export default function Home() {
	const height = useBreakpointValue({
		base: "80px",
		md: "40px",
		lg: "40px",
		xl: "20px",
		"2xl": "0px",
	});

	
	const main = jsonData.main;
	return (
		<>
			{console.log(main)}
            <Box height={height}></Box>
			<Carousel arr={main} width={"90%"} />
			<CarouselMultipleSlides
				arr={jsonData.premium}
				heading={"Watch Premium for free"}
			/>
			<CarouselMultipleSlides
				arr={jsonData.topshows}
				heading={"Top chart Tv shows"}
			/>

			<CarouselMultipleSlides
				arr={jsonData["new-releases"]}
				heading={"Newest Releases"}
			/>
			<CarouselMultipleSlides
				arr={jsonData["more-from-apple"]}
				heading={"Browse by Category"}
			/>
			<CarouselMultipleSlides
				arr={jsonData["bridge-entire-season"]}
				heading={"Bridge Entire Seasons"}
			/>
			<Cover
				url={"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/0e/17/c1/0e17c1cc-8b02-960b-2138-8f3a04a060b3/7262cc6f-01e8-4a6e-8972-d4cce4861031.png/1679x945sr.webp"}
				url2={
					"https://is1-ssl.mzstatic.com/image/thumb/2Pvq9Q1gy7cxOpfXK1_8Ew/480x180.webp"
				}
			/>
			<CarouselMultipleSlides
				arr={jsonData.topmovies}
				heading={"Top chart: Movies"}
			/>
			<CarouselMultipleSlides arr={jsonData.main} heading={"Future Releases"} />
			<Carousel arr={jsonData.coverSlider1} width={"85%"} marginTop={"2rem"} />
			<CarouselMultipleSlides
				arr={jsonData["new-releases"]}
				heading={"Most watched "}
			/>
			<CarouselMultipleSlides
				arr={jsonData.premium}
				heading={"Available for free"}
			/>
			<Carousel arr={jsonData.coverSlider2} width={"85%"} marginTop={"2rem"} />
		</>
	);
}
