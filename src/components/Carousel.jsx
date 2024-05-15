
import React from "react";
import Slider from "react-slick";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Carousel({ arr, width, margin }) {

	 const isMobile = useBreakpointValue({
		base: true,
		md: false,
		lg: false,
		xl: false,
		"2xl": false,
	});



	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		arrows:!isMobile
	};

	return (
		<> 
			<Slider
			marginTop={[]}
				backgroundColor={"#2d2d2d"}
				style={{
					width: "100%", // Adjusted for responsiveness
					margin: "auto",
					
				}}
				{...settings}
			>
				{arr.map((images) => (
					<Box key={images.id} position={"relative"}>
						<Image
							position={"absolute"}
							left={{ base: "2%", md: "5%" }} 
							top={{ base: "7%", md: "10%" }} 
							width={{ base: "15%", md: "10%" }} 
							src={
								"https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
							}
						/>
						<Image
							borderBottomRightRadius={".5rem"}
							borderBottomLeftRadius={".5rem"}
							borderRadius={".5rem"}
							width={"100%"}
							maxHeight={{ base: "400px", md: "900px" }} // Adjusted for responsiveness
							src={images.Image}
							alt={`Image ${images.id}`}
						/>

						<Box
							w={{ base: "80%", md: "xs" }} 
							position={"absolute"}
							bottom={{ base: "5%", md: "10%" }} 
							color={"white"}
							left={{ base: "2%", md: "5%" }} 
						>
							<Heading size={['lg','lg','lg','lg',"xl",'2xl']} color={"white"}>{images.title}</Heading>
							<Container margin={"1rem"} marginLeft={"0px"}>
								{images.description}
							</Container>
							<Button size={["sm","lg","lg","lg","lg"]} w={['','','md','md','md','md']}>Watch Now</Button>
						</Box>
					</Box>
				))}
			</Slider>
		</>
	);
}
