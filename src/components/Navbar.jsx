import {
	Flex,
	Box,
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbItem,
	Button,
	Spacer,
	Stack,
	InputLeftAddon,
	Input,
	Grid,
	Center,
	InputGroup,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { HamburgerMenu } from "./HamburgerMenu";




export default function Navbar() {

     const {isAuth}=useContext(AuthContext)
	 const isMobile=useBreakpointValue({
		 base:true,
		 sm:true,
		 md:true,
		 lg:false,
		 xl:false,
		 "2xl":false,
	 })






	return (
		<>
			<Box
				zIndex={"5"}
				position={"Fixed"}
				top={"0"}
				left={"0"}
				right={"0"}
				backgroundColor={"black"}
			>
				
				<Grid
					width={"90%"}
					margin={"auto"}
					color={"white"}
					templateColumns={"1fr 5fr 1fr"}
					paddingTop={".7rem"}
					paddingBottom={".7rem"}
					alignItems={"center"}
					paddingRight={"2rem"}
				>
					<Box></Box>
					{isMobile && <HamburgerMenu/>}

					{!isMobile &&<Center>
						<Breadcrumb separator={<space color="gray.500" />}>
							<BreadcrumbItem textDecoration={"none"}>
								<Link to="/">Apple Tv+</Link>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<Link to="/MlsSeasonPass">MLS Season Pass</Link>
							</BreadcrumbItem>
						</Breadcrumb>
					</Center>}
					<Box>
						<Flex alignItems={"center"}>
							<InputGroup size="sm" width={"10rem"} borederRadius={"1rem"}>
								<InputLeftAddon
									backgroundColor={"black"}
									borderRight={"none"}
									children={<Search2Icon />}
								/>
								<Input
									fontSize={"1rem"}
									type="text"
									color={"white"}
									placeholder="Search"
									borderLeft={"none"}
								/>
							</InputGroup>

							{isAuth?<SignIn/>:<CreateAccount/>}
						</Flex>
					</Box>
				</Grid>
			</Box>
		</>
	);
}
