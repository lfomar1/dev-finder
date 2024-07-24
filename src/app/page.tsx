"use client";
import {
  Text,
  Container,
  Box,
  Heading,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  Divider,
} from "@chakra-ui/react";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "./context/appContext";
import { useRouter } from "next/navigation";
import { useData } from "./hooks/useData";
import ButtonLink from "./components/buttonLink";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");

  const { inputValue, setInputValue } = useAppContext();

  const { userExists } = useData(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue(username);
    router.push("/user");
  };

  return (
    <main>
      <Container
        boxShadow="lg"
        bg="white"
        p={10}
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        gap={2}
        centerContent
      >
        <Box display="flex" gap={5} justifyContent="center" alignItems="center">
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            as="h1"
            size="3xl"
          >
            Dev-Finder
          </Heading>
          <Icon as={FaGithub} boxSize={10} />
        </Box>
        <Divider mt={1} shadow="md" />
        <VStack p="6" rounded="md">
          <Box>
            <VStack>
              <Heading as="h2">Know Your Developer a bit More</Heading>
              <Text fontSize="xl">
                Search for your favorite developer and view all their GitHub
                profile info.
              </Text>
            </VStack>
          </Box>
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <FormControl display="flex" gap={2} mt={5}>
                <InputGroup>
                  <Input
                    width="100%"
                    placeholder="E.g: lfomar1"
                    boxShadow="md"
                    onChange={handleInputChange}
                  ></Input>
                  {userExists && (
                    <InputRightElement>
                      <CheckIcon color="green.500"></CheckIcon>
                    </InputRightElement>
                  )}
                </InputGroup>
                <ButtonLink type="submit">
                  <SearchIcon />
                </ButtonLink>
              </FormControl>
            </form>
          </Box>
        </VStack>
      </Container>
    </main>
  );
}
