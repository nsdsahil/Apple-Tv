import React from "react";
import Slider from "react-slick";
import {
	Box,
	Flex,
	Button,
	Spacer,
	Container,
	Heading,
	Image,
	Text,
	Divider,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function CarouselMultipleSlides({ arr, heading,flag }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: true,
		centerPading: true,
		focusOnSelect: true,
	};

	const responsiveSettings = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
	];

	return (
		<Box
			borderTop={!flag?"1px solid gray":"none"}
			width={{ base: "100%", md: "85%" }}
			margin="auto"
			paddingTop="1.5rem"
			marginTop="1.5rem"
			marginBottom="1.5rem"
		>
			<Heading as="h4" size="md" color={"white"}>
				{heading}
			</Heading>
			<Slider
				backgroundColor={"#2d2d2d"}
				style={{
					margin: "auto",
					paddingTop: "1rem",
				}}
				{...settings}
				responsive={responsiveSettings}
			>
				{arr.map((images) => (
					<Box key={images.id} color={"white"} paddingRight={"2rem"}>
						<Image borderRadius={"1rem"} width={"100%"} src={images.Image} />
						<Flex alignItems={"center"}>
							<Heading
								as="h1"
								size="2xl"
								display={"inline"}
								marginRight={"1rem"}
							>
								{images.ranking}
							</Heading>
							<Container>
								<Heading size="">{images.movie}</Heading>
								{images.category}
							</Container>
						</Flex>
					</Box>
				))}
			</Slider>
		</Box>
	);
}
