import React, { useState, useEffect } from "react";
import {
	Collapse,
	Box,
	Text,
	Image,
	Button,
	Flex,
	Heading,
} from "@chakra-ui/react";

const AccordionWithImage = () => {
	const [openItemId, setOpenItemId] = useState(null);
	const [activeImage, setActiveImage] = useState(null);
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	// Set the duration for each accordion item to stay open (in milliseconds)
	const delayDuration = 2000;

	// Accordion items with associated images
	const accordionItems = [
		{
			id: 1,
			title: "Item 1",
			content: "Content for Item 1",
			image:
				"https://images.ctfassets.net/wl95ljfippl8/6tEm54xJ9y02UNB6qsBwfb/f797006ef9d262ffd96211c20ceaf20b/Marketing_Solution_6B.png",
		},
		{
			id: 2,
			title: "Item 2",
			content: "Content for Item 2",
			image:
				"https://images.ctfassets.net/wl95ljfippl8/43mx2YzU4bpMiOgsQhCcqW/6f0eb61c2b5614218b8ba7a0553680c9/Product.jpg",
		},
		{
			id: 3,
			title: "Item 3",
			content: "Content for Item 3",
			image:
				"https://images.ctfassets.net/wl95ljfippl8/67w5wXJatBGiypJYBodExU/600c79276433b0a6b034ff505fd81225/Operations.webp",
		},
		{
			id: 4,
			title: "Item 4",
			content: "Content for Item 3",
			image:
				"https://images.ctfassets.net/wl95ljfippl8/7IK2gx05XtMbjmK7r9GZI7/1a0a99f51468e019cc9125c1cf933ef6/Finance.webp",
		},
		{
			id: 5,
			title: "Item 5",
			content: "Content for Item 3",
			image:
				"https://images.ctfassets.net/wl95ljfippl8/51zIaGAxKdp4fzSRLW9x6p/cccdc28bd0117c81f415d2479ca32b6c/HR.webp",
		},
	];

	useEffect(() => {
		let timeoutId;

		const autoPlayAccordion = (index) => {
			if (index < accordionItems.length && isAutoPlay) {
				timeoutId = setTimeout(() => {
					setOpenItemId(accordionItems[index].id);
					setActiveImage(accordionItems[index].image);
					autoPlayAccordion(index + 1);
				}, delayDuration);
			}
		};

		autoPlayAccordion(0);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isAutoPlay]);

	const handleToggleAutoPlay = () => {
		setIsAutoPlay((prev) => !prev);
	};

	const handleItemClick = (itemId, itemImage) => {
		setOpenItemId((prev) => (prev === itemId ? null : itemId));
		setActiveImage(itemImage);
		setIsAutoPlay(false); // Stop auto play on manual click
	};

	return (
		<Flex
			padding={"3rem"}
			backgroundColor={"white"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box width={"40%"}>
				{activeImage && (
					<Box mt={4}>
						<Image
							borderRadius={"2rem"}
							widht={"100%"}
							src={activeImage}
							alt="Active"
							objectFit="cover"
						/>
					</Box>
				)}
			</Box>
			<Box padding={"4rem"} width={"40%"}>
				{accordionItems.map((item) => (
					<Box key={item.id} mb={4}>
						<Heading
							as="h3"
							size="md"
							cursor="pointer"
							onClick={() => handleItemClick(item.id, item.image)}
						>
							{item.title}
						</Heading>
						<Collapse in={openItemId === item.id}>
							<Box p={4} bg="gray.100">
								{item.content}
							</Box>
						</Collapse>
					</Box>
				))}
			</Box>
		</Flex>
	);
};

export default AccordionWithImage;
