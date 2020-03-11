import { Box, Image, Badge, Text, Stack, Icon, Button, useColorMode } from '@chakra-ui/core';

const Card = () => {
  return (
    <Box w="400px" rounded="20px" overflow="hidden" boxShadow="sm" bg="gray.200">
      <Image src="./thumb.png" alt="card" />
			<Box p={5}>
				<Badge variant="solid" variantColor="teal" rounded="full" px="2">NEW!</Badge>
			</Box>
    </Box>
  );
};

export default Card;
