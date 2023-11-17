import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	useDisclosure,
	Image,
	ModalCloseButton,
	Text,
	Flex,
	Heading,
	Input,
	Container,
	Link,
} from "@chakra-ui/react";
import CreateAccount from "./CreateAccount";
import { useState } from "react";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();


	const handleLogin = () => {
		const user = userData.users.find(
		  (user) => user.username === username && user.password === password
		);
	
		if (user) {
		  console.log("Login successful!");
		  setError("");
		} else {
		  console.log("Login failed!");
		  setError("Invalid username or password");
		}
	  };



	return (
		<>
			<Button
				size={"xs"}
				width={"5rem"}
				marginLeft={"1rem"}
				backgroundColor={"#0a84ff"}
				color={"white"}
				onClick={onOpen}
			>
				Sign in
			</Button>

			<Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent textAlign={"center"} backgroundColor={"#262629"}>
					<ModalHeader></ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex
							padding={"2rem"}
							color="white"
							direction={"column"}
							alignItems={"center"}
						>
							<Image
								width={"4rem"}
								src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
							/>
							<Heading margin={"1rem"} size="lg">
								{" "}
								SignIn 
							</Heading>
							<Heading margin={"1rem"} size="md">
								Enter your email & password to get started..
							</Heading>
							<form onSubmit={handleSignin}>
							<Input
									required
									width={"70%"}
									backgroundColor={"#2d2d2d"}
									color={"white"}
									size="lg"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									margin={"auto"}
									marginBottom={'1rem'}
									height={"4rem"}
									placeholder="Email or Apple ID"
								/>
								<Input
									required
									width={"70%"}
									backgroundColor={"#2d2d2d"}
									color={"white"}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									size="lg"
									margin={"auto"}
									height={"4rem"}
									placeholder="password"
								/>
								<Link display={"block"} color={"#0a84ff"}>
									Forgot Apple ID or Password
								</Link>
								<Image
									display={"block"}
									margin={"auto"}
									marginTop={'1rem'}
									marginBottom={'1rem'}
									src="https://tv.apple.com/static-commerce/img/privacy-dark.90d9528d.svg"
								/>
								<Container textAlign={"center"} maxW="xl" fontSize={".7rem"}>
									Your Apple ID information is used to allow you to sign in
									securely and access your data. Apple records certain data for
									security, support, and reporting purposes. If you agree, Apple
									may also use your Apple ID information to send you marketing
									emails and communications, including based on your use of
									Apple services.
									<Link>see how your data is managed....</Link>
								</Container>{" "}
								<Input margin={'1rem'} type='submit' width={'40%'} size="lg">Continue</Input>
							</form>
						</Flex>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
