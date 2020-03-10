import { Text, Box, useColorMode, Link, IconButton } from '@chakra-ui/core';

const index = () => {
	const { colorMode } = useColorMode();
	return (
		<Box fontSize='2xl' textAlign='center'>
			You can explore different examples from the navbar above ⬆️ <br />
			Learn more about Chakr-UI @
			<Link href='https://chakra-ui.com/'>www.chakra-ui.com</Link> <br />
			Chakra-ui is made an maintaned by Segun Adebayo.
		</Box>
	);
};

export default index;
