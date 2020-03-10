import {
  Input,
  Stack,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Icon,
  Button,
  Divider,
  FormHelperText
} from "@chakra-ui/core";

const LoginForm = () => {
  return (
    <form>
      <Stack>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="email" />} />
            <Input type="email" placeholder="Eamil" aria-lable="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="lock" />} />
            <Input type="password" placeholder="Password" aria-lable="Password" />
          </InputGroup>
        </FormControl>
        <Divider />
        <Button
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
          _active={{ boxShadow: "lg" }}
          type="submit"
        >
          Sign In
        </Button>
        <FormHelperText textAlign="center">
          Welcome Home!
          <br />
          🏠
        </FormHelperText>
      </Stack>
    </form>
  );
};

export default LoginForm;
