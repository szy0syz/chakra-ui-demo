import {
  Input,
  Stack,
  InputLeftAddon,
  Icon,
  InputGroup,
  FormControl,
  Button,
  Divider,
  FormHelperText
} from "@chakra-ui/core";

const SignupForm = () => {
  return (
    <form action="action">
      <Stack spacing={5}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input type="name" placeholder="First Name" aria-lable="First Name" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input type="name" placeholder="Last Name" aria-lable="Last Name" />
          </InputGroup>
        </FormControl>
        <Divider borderColor="gray.400" />
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="email" />} />
            <Input type="email" placeholder="Email" aria-lable="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="lock" />} />
            <Input type="password" placeholder="Password" aria-lable="Password" />
          </InputGroup>
        </FormControl>
        <Divider borderColor="gray.400" />
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
          _active={{ boxShadow: "lg" }}
        >
          Sign up
        </Button>
        <FormHelperText textAlign="center">We will never share your email!</FormHelperText>
      </Stack>
    </form>
  );
};

export default SignupForm;
