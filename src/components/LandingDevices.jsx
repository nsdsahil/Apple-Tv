import {
	Link,
	Image,
	Flex,
	Box,
	Container,
	Text,
	Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Qna from "./qna";

export default function () {
	return (
		<Flex
			alignItems={"center"}
			padding={"3rem"}
			direction={"column"}
			backgroundColor={"white"}
			justifyContent={"space-between"}
		>
			<Image
				display={"block"}
				margin={"auto"}
				src="https://tv.apple.com//assets/brands/Apple_TV_plus_logo_black-8f8ee485ebc6d720f59210aefc05f905.svg"
			/>
			<Heading>Watch here and on the big screen. </Heading>
			<Flex  width={"90%"} flexWrap={"wrap"} justifyContent={"center"}>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_google_tv__e5t4asdc2gsy_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_roku__d3kr4gpcimoi_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_sony__dv28xq4n91ea_medium_2x.jpg"
					}
				/>

				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_medium_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_vizio__crgnno5ezt2e_large_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xbox__cfelmbxxfoaa_large_2x.jpg"
					}
				/>
				<Image
					margin={"1rem"}
					src={
						"https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_medium_2x.jpg"
					}
				/>
			</Flex>

			<Heading>Watch on the go</Heading>
			<Link size="xl" fontWeight={"bold"} color={"#0a84ff"}>
				see All the Ways to Watch Apple Tv+
			</Link>
			<Flex flexWrap={"wrap"} justifyContent={"center"}>
				<Box textAlign={"center"}>
					<Image
						margin={"1rem"}
						src={"https://cdn-icons-png.flaticon.com/128/10595/10595859.png"}
					/>
					<Text>iphone</Text>
				</Box>
				<Box textAlign={"center"}>
					<Image
						margin={"2rem"}
						src={"https://cdn-icons-png.flaticon.com/128/64/64828.png"}
					/>
					<Text>ipad</Text>
				</Box>
				<Box textAlign={"center"}>
					<Image
						margin={"2rem"}
						src={"https://cdn-icons-png.flaticon.com/128/1055/1055329.png"}
					/>
					<Text>mac & windows</Text>
				</Box>
				<Box textAlign={"center"}>
					<Image
						margin={"2rem"}
						src={"https://cdn-icons-png.flaticon.com/128/4620/4620314.png"}
					/>
					<Text>Airplay</Text>
				</Box>
				<Box textAlign={"center"}>
					<Image
						margin={"2rem"}
						src={"https://cdn-icons-png.flaticon.com/128/2721/2721688.png"}
					/>
					<Text>web</Text>
				</Box>
			</Flex>

			<Qna />
		</Flex>
	);
}
