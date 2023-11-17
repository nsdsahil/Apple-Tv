import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthContextProvider>
	<BrowserRouter>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</BrowserRouter>
	</AuthContextProvider>
);
