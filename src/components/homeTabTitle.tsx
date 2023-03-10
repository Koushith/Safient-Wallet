import React from 'react';
import {VStack, Heading, Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';

type Props = {
  screen?: keyof HomeTabParamList;
  network?: Networks;
};

export const HomeTabTitle = ({screen, network}: Props) => {
  return (
    <VStack justifyContent="center" alignItems="center">
      <Heading fontSize="16px" fontFamily="heading">
        {screen}
      </Heading>
      <Text fontWeight={500} fontSize="9px" fontFamily="heading">
        <FontAwesomeIcon icon={faCircle} color={'green'} size={6} />
        {'  '}
        Polygon
      </Text>
    </VStack>
  );
};
