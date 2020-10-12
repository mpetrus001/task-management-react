import React from "react";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/core";
import { Link as RouterLink } from "@reach/router";

const MenuItem = ({ children }: { children: React.ReactNode }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Link as="span">{children}</Link>
  </Text>
);

const Header = (props: React.ComponentPropsWithoutRef<"nav">) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="purple.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Task Management
        </Heading>
      </Flex>
      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItem>
          <RouterLink to="/">Home</RouterLink>
        </MenuItem>
      </Box>

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <RouterLink to="signin">
          <Link as="span">Sign In</Link>
        </RouterLink>
      </Box>
    </Flex>
  );
};

export default Header;
