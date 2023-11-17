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
	Select,
	Spacer,
	Container,
	Link,
	Checkbox,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import jsonData from "../data.json";
import { AuthContext } from "../context/AuthContext";



export default function CreateAccount() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
const{setAuth}=useContext(AuthContext)
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSignup = (e) => {
		e.preventDefault()
		// Check if the username is already taken
		const usernameExists = jsonData.users.some(
			(user) => user.username === username
		);

		if (usernameExists) {
			console.log("Username already exists");
		} else {
			// Create a new user and add it to the JSON data
			const newUser = {
				username,
				password,
				id: jsonData.users.length + 1,
			};
			setAuth(true)

			// Update the JSON data (in a real app, you'd typically make a server request)
			jsonData.users=[
				newUser
			]
			{console.log(username,password,jsonData.users)}

			console.log("Signup successful!");
			
		}
	};

	return (
		<>
			<Button
				width={"40%"}
				size={"sm"}
				marginTop={"1rem"}
				backgroundColor={"#0a84ff"}
				color={"white"}
				marginBottom={'1rem'}
				marginLeft={'1rem'}
				onClick={onOpen}
			>
				SignUp
			</Button>
			{console.log(username,password,jsonData.users)}

			<Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent backgroundColor={"#181d15"}>
					<ModalHeader></ModalHeader>
					<ModalCloseButton color='white' />
					<ModalBody>
						<Flex
							padding={"2rem"}
							justifyContent={"space-around"}
							color="white"
							direction={"column"}
							alignItems={"center"}
						>
							<Spacer />
							<Image
								width={"4rem"}
								src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
							/>
							<Heading>Create Account</Heading>
							<form style={{ width: "60%" }} action="" onSubmit={handleSignup}>
								<Input
									marginTop={"2rem"}
									placeholder="email"
									value={username}
									type="email	"
									size="lg"
									onChange={(e) => setUsername(e.target.value)}
								/>
								<Text>This email address will become your Apple ID.</Text>
								<Spacer />
								<Input
									marginTop={"2rem"}
									placeholder="Password"
									value={password}
									type="email	"
									size="lg"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Text>
									Your password must have 8 or more characters, upper and
									lowercase letters, and at least one number.
								</Text>
								<Spacer />
								<Input
									marginTop={"2rem"}
									placeholder="First Name"
									type="text"
									size="lg"
								/>
								<Text></Text>
								<Spacer />
								<Input
									marginTop={"2rem"}
									placeholder="Last Name"
									type="text"
									size="lg"
								/>

								<Text></Text>
								<Input
									marginTop={"2rem"}
									placeholder="Birthday"
									type="date"
									size="lg"
								/>
								<Select marginTop={"2rem"} placeholder="Select option">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>

								<Container textAlign={"center"} maxW="xl" fontSize={".7rem"}>
									Your Apple ID information is used to allow you to sign in
									securely and access your data. Apple records
								</Container>
								<Checkbox>
									<Text>
										Receive Apple emails and
										communications including new releases, exclusive content,
										special offers, and marketing and recommendations for apps,
										music, movies, TV, books, podcasts, Apple Pay, and more.
									</Text>
								</Checkbox>
								<Input
									marginTop={"2rem"}
									backgroundColor={"#0a84ff"}
									type="submit"
									value="signUp"
								/>
							</form>
						</Flex>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
