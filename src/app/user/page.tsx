"use client";
import {
  VStack,
  Box,
  Text,
  Heading,
  Avatar,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useData } from "../hooks/useData";
import Loading from "./loading";
import { AppProvider, useAppContext } from "../context/appContext";
import Error from "../components/error";

const User = () => {
  const { inputValue } = useAppContext();
  const { isLoading, error, newUser } = useData(inputValue);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <AppProvider>
        <VStack>
          <Heading>Users Info</Heading>
          {isLoading ? (
            <Loading />
          ) : (
            <Box>
              <Avatar size="xl" src={newUser.avatar}></Avatar>
              <Text>{newUser.twitter}</Text>
              <Text>Twitter account</Text>
              <Text>Bio</Text>
              <Text>Location</Text>
              <Text>
                Public Repositories: Stars: Number of stars the repository has
                received. Forks: Number of forks. Language: The main programming
                language used in the repository.
              </Text>
              <Text>Numbers of followers</Text>
            </Box>
          )}
        </VStack>
      </AppProvider>
    </>
  );
};

export default User;
