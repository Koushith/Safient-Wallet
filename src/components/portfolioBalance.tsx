import React, {PropsWithChildren} from 'react';
import {Box, Button, Text, HStack, Heading} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowTrendUp} from '@fortawesome/free-solid-svg-icons/faArrowTrendUp';
import {faArrowTrendDown} from '@fortawesome/free-solid-svg-icons/faArrowTrendDown';

import {AppColors} from '../config';

interface Props {
  previousBalance?: any;
  currentBalance?: any;
  currency?: any;
  isHidden?: boolean;
  onToggleVisibility: () => void;
}

export const PortfolioBalance = ({
  previousBalance,
  currentBalance,
  isHidden,
  onToggleVisibility,
}: PropsWithChildren<Props>) => {
  const visibilityButtonText = isHidden ? 'Show' : 'Hide';
  const isTrendUp = 5000;
  const changePercentColor = isTrendUp
    ? AppColors.singletons.good
    : AppColors.singletons.warning;
  const trendIcon = isTrendUp ? (
    <FontAwesomeIcon
      icon={faArrowTrendUp}
      style={{color: AppColors.singletons.good}}
      size={20}
    />
  ) : (
    <FontAwesomeIcon
      icon={faArrowTrendDown}
      style={{color: AppColors.singletons.warning}}
      size={20}
    />
  );

  return (
    <Box w="100%" justifyContent="center" alignItems="center">
      <Heading fontWeight={600} fontSize="46px">
        50000
      </Heading>

      <HStack space="10px">
        <Text fontWeight={600} fontSize="18px" color="text.2">
          5000
        </Text>

        <Text fontWeight={600} fontSize="18px" color={changePercentColor}>
          50
          {trendIcon}
        </Text>
      </HStack>

      <Button variant="link" onPress={onToggleVisibility}>
        {visibilityButtonText}
      </Button>
    </Box>
  );
};
