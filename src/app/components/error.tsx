import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ButtonLink from "./buttonLink";

const Error = () => {
  return (
    <Box
      display="flex"
      gap="10px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderWidth="1px"
      borderRadius="lg"
      p={3}
      boxShadow="lg"
    >
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        maxWidth="lg"
      >
        <AlertIcon boxSize="40px" mr={0}></AlertIcon>
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops! Something went wrong
        </AlertTitle>
        <AlertDescription maxWidth="md" mb={5}>
          We encountered an issue while trying to fetch the data. Please refresh
          the page or try again later.
        </AlertDescription>
        <ButtonLink href="/" bgColor="red" type="button">
          Try Again
        </ButtonLink>
      </Alert>
    </Box>
  );
};

export default Error;
