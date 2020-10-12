import React from "react";
import { Box, Heading, Flex, Text, Button, Link } from "@chakra-ui/core";
import { Link as RouterLink } from "@reach/router";

const MenuItems = ({ children }: { children: React.ReactNode }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Link>{children}</Link>
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
        <MenuItems>
          <RouterLink to="/">Home</RouterLink>
        </MenuItems>
        <MenuItems>
          <RouterLink to="dashboard">Dashboard</RouterLink>
        </MenuItems>
      </Box>

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Button bg="transparent" border="1px">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
