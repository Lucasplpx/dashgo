import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Lucas Passos</Text>
          <Text color='gray.300' fontSize='small'>
            lucas.schell.f@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Lucas Passos'
        src='https://github.com/Lucasplpx.png'
      />
    </Flex>
  );
}
