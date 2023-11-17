import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Heading,
	Box,
} from "@chakra-ui/react";

export default function Qna() {
	return (
		<>
			<Accordion
				allowMultiple
				allowToggle
				backgroundColor={"white"}
				width={"70%"}
				margin={"auto"}
				marginTop={"5%"}
			>
				<Heading textAlign={"center"} marginBottom={"2rem"}>
					Questions? Answers
				</Heading>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								What is Apple TV+?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Apple TV+ is a streaming service from Apple. It features exclusive
						Apple Original shows and movies from some of the industry's top
						talent, with new premieres arriving each month. Browse all of the
						available content on Apple TV+ inside the Apple TV app on the “Apple
						TV+” tab or here on
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								How much does Apple TV+ cost?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Pricing might vary depending on the offer you choose. (1) If you buy
						an Apple device, Apple TV+ is included free for 3 months.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Can I get Apple TV+ for free?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						There are a few ways to try Apple TV+ for free. First, try 7 days of
						Apple TV+ for free by starting a trial in the Apple TV app on your
						iPhone, iPad, Apple TV 4K or HD, or on any streaming device. If
						you’ve recently purchased Apple hardware that includes a 12-month,
						6-month, or 3-month or other complimentary free trial of Apple TV+,
						this offer will automatically appear in the Apple TV app when signed
						in with the Apple ID associated with your recent hardware purchase.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Where can I watch Apple TV+?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						many smart TVs, streaming devices, game consoles, and some select
						cable boxes
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								What shows and movies can I watch on Apple TV+?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						With Apple TV+, you can watch Apple Original shows and movies made
						exclusively for Apple. New releases are added each month that you
						can browse in the Apple TV app or on
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Can I share Apple TV+ with my family?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Yes. Apple TV+ lets you share your subscription with up to five
						family members.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}
