import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Lucas Passos</Text>
        <Text color='gray.300' fontSize='small'>
          lucas.schell.f@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Lucas Passos'
        src='https://github.com/Lucasplpx.png'
      />
    </Flex>
  );
}
