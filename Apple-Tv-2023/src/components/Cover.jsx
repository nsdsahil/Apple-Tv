import { Image, Box, Container, Heading } from "@chakra-ui/react";

export default function Cover({ url, url2 }) {
  return (
    <>
      <Box
        position={"relative"}
        width={{ base: "100%", md: "85%" }}
        margin="auto"
        marginTop="1rem"
        height={{ base: "300px", md: "700px" }}
        borderRadius={{ base: "0", md: "1rem" }}
        backgroundImage={url}
        backgroundSize={{ base: "cover", md: "contain" }}
      >
        <Box position={"absolute"} bottom={{ base: "2rem", md: "6rem" }} left={{ base: '1rem', md: '4rem' }}>
          <Image left={'4rem'} src={url2} />
          <Heading color="white" size="md">
            New Series Premiers Friday
          </Heading>
          <Heading color="white" as="h4">
            Watch Trailer
          </Heading>
        </Box>
      </Box>
    </>
  );
}
