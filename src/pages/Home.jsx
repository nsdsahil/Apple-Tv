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
export default function Home() {
	const main = jsonData.main;
	return (
		<>
			{console.log(main)}

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
				url={"src/assets/images/cover/11.jpg"}
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
