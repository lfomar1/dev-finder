import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Heading,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaXTwitter, FaLocationDot, FaGithub } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { User } from "../types/user";
import { IconType } from "react-icons";
import { As } from "@chakra-ui/react";
type HeaderInfo = Pick<
  User,
  "avatar_url" | "name" | "login" | "location" | "twitter_username" | "company"
>;

const InfoItem = ({
  icon,
  text,
  textType,
}: {
  icon?: IconType;
  text?: string;
  textType?: As;
}) => {
  return (
    <>
      {text && (
        <Text display="flex" alignItems="center" gap={1}>
          <Icon as={icon} />
          {text}
        </Text>
      )}
    </>
  );
};

const HeaderInfoPage = ({
  avatar_url,
  name,
  login,
  location,
  twitter_username,
  company,
}: HeaderInfo) => {
  return (
    <>
      <CardHeader>
        <Flex gap={5} alignItems="center" justifyContent="center">
          <Avatar src={avatar_url} size="2xl" boxShadow="dark-lg"></Avatar>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box>
              <Heading>{name}</Heading>
              <InfoItem icon={FaGithub} text={login} />
            </Box>
            <Box>
              <InfoItem icon={IoBusiness} text={company} />
              <InfoItem icon={FaLocationDot} text={location} />
              <InfoItem icon={FaXTwitter} text={twitter_username} />
            </Box>
          </Box>
        </Flex>
      </CardHeader>
    </>
  );
};

export default HeaderInfoPage;
