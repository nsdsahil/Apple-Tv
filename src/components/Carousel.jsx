// import React from "react";
// import Slider from "react-slick";
// import { useState, useEffect } from "react";
// import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Carousel({ arr, width, margin }) {
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		pauseOnHover: true,
// 	};
// 	return (
// 		<>
// 			<Slider
// 				backgroundColor={"#2d2d2d"}
// 				style={{
// 					width: width,
// 					margin: "auto",
// 					marginTop: margin,
// 				}}
// 				{...settings}
// 			>
// 				{arr.map((images) => (
// 					<Box key={images.id} position={"relative"}>
// 						<Image
// 							position={"absolute"}
// 							left={"2%"}
// 							top={"7%"}
// 							width={"10%"}
// 							src={
// 								"https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
// 							}
// 						/>
// 						<Image
// 							borderBottomRightRadius={".5rem"}
// 							borderBottomLeftRadius={".5rem"}
// 							borderRadius={".5rem"}
// 							width={"100%"}
// 							maxHeight={"900px"}
// 							src={images.Image}
// 							alt="Image 1"
// 						/>

// 						<Box
// 							w="xs"
// 							position={"absolute"}
// 							bottom={"10%"}
// 							color={"white"}
// 							left={"2%"}
// 						>
// 							<Heading color={"white"}>{images.title}</Heading>
// 							<Container margin={"1rem"} marginLeft={"0px"}>
// 								{images.description}
// 							</Container>
// 							<Button w="sm">Watch Now</Button>
// 						</Box>
// 					</Box>
// 				))}
// 			</Slider>
// 		</>
// 	);
// }
import React from "react";
import Slider from "react-slick";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ arr, width, margin }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
	};

	return (
		<>
			<Slider
				backgroundColor={"#2d2d2d"}
				style={{
					width: "100%", // Adjusted for responsiveness
					margin: "auto",
					marginTop: margin,
				}}
				{...settings}
			>
				{arr.map((images) => (
					<Box key={images.id} position={"relative"}>
						<Image
							position={"absolute"}
							left={{ base: "2%", md: "5%" }} // Adjusted for responsiveness
							top={{ base: "7%", md: "10%" }} // Adjusted for responsiveness
							width={{ base: "15%", md: "10%" }} // Adjusted for responsiveness
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
							w={{ base: "80%", md: "xs" }} // Adjusted for responsiveness
							position={"absolute"}
							bottom={{ base: "5%", md: "10%" }} // Adjusted for responsiveness
							color={"white"}
							left={{ base: "2%", md: "5%" }} // Adjusted for responsiveness
						>
							<Heading color={"white"}>{images.title}</Heading>
							<Container margin={"1rem"} marginLeft={"0px"}>
								{images.description}
							</Container>
							<Button w="sm">Watch Now</Button>
						</Box>
					</Box>
				))}
			</Slider>
		</>
	);
}
