"use client";
import { Card, Heading } from "@chakra-ui/react";
import { useData } from "../hooks/useData";
import Loading from "./loading";
import { AppProvider, useAppContext } from "../context/appContext";
import Error from "../components/error";
import HeaderInfoPage from "../components/headerInfoPage";

const User = () => {
  const { inputValue } = useAppContext();
  const { isLoading, error, newUser } = useData(inputValue);

  if (error) {
    return <Error />;
  }
  const UserProps = {
    avatar_url: newUser.avatar,
    name: newUser.name,
    login: newUser.userName,
    company: newUser.company,
    location: newUser.location,
    twitter_username: newUser.twitter,
  };
  return (
    <>
      <Card width="xl">
        <Heading>Users Info</Heading>
        {isLoading ? <Loading /> : <HeaderInfoPage {...UserProps} />}
      </Card>
    </>
  );
};

export default User;
