import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  Box,
} from "@chakra-ui/core";
import { RouteComponentProps } from "@reach/router";

const SignIn = (props: RouteComponentProps) => (
  <Box
    padding="1.5rem"
    borderWidth="1px"
    rounded="lg"
    mx="auto"
    mt={5}
    maxW="lg"
    width={{ sm: "full", md: "auto" }}
    {...props}
  >
    <Heading as="h2" size="lg" mb={5}>
      Sign In
    </Heading>
    <SignInForm />
  </Box>
);

function SignInForm() {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  function validatePassword(value: string) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value);
  }

  function onSubmit(values: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="Email">Email</FormLabel>
        <Input
          name="email"
          placeholder="email"
          ref={register({ validate: validateEmail })}
        />
        <FormErrorMessage>
          {errors.email && "Email format is not valid"}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="Password">Password</FormLabel>
        <Input
          name="password"
          placeholder="password"
          ref={register({ validate: validatePassword })}
          type="password"
        />
        <FormErrorMessage>
          {errors.password && "Password format is not valid"}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        variantColor="purple"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default SignIn;
