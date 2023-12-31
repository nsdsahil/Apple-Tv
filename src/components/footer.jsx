import { Box, Container, Flex } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <>
      <Flex
        padding={"2%"}
        color={"rgb(255 255 255 / 64%)"}
        justifyContent={"space-between"}
        backgroundColor={"#2d2d2d"}
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
      >
        <Box>
          <Container color={"rgb(255 255 255 / 64%)"} fontSize="inherit">
            Copyright © 2023 All rights reserved.
          </Container>
          <Breadcrumb marginLeft={"0"} fontSize="inherit">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Item service terms</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Apple Tv & Privacy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">cookie Policy</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Support</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Breadcrumb fontSize="inherit">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">United States</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Espenol(Mexico)</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </>
  );
}
