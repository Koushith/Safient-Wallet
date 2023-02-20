import * as React from 'react';
import {Box, HStack, Heading} from 'native-base';

export const SplashScreen = () => {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor={'black'}>
      <HStack space={2} justifyContent="center">
        <Heading fontSize="md">Safient Wallet</Heading>
      </HStack>
    </Box>
  );
};
