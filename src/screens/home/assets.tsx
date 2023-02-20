// import React, {useState, useEffect, useMemo} from 'react';
// import {Box, Button, HStack} from 'native-base';
// import type {CompositeScreenProps} from '@react-navigation/native';
// import type {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faSliders} from '@fortawesome/free-solid-svg-icons/faSliders';
// import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
// import {faQrcode} from '@fortawesome/free-solid-svg-icons/faQrcode';
// import {
//   CurrencyCategoryList,
//   CurrencyMeta,
//   CurrencySymbols,
// } from '@stackupfinance/config';
// import {RootStackParamList, HomeTabParamList, AppColors} from '../../config';
// import {
//   TabScreenContainer,
//   TabScreenHeader,
//   HomeTabTitle,
//   IconButton,
//   List,
//   PortfolioBalance,
//   PortfolioItem,
// } from '../../components';
// import {
//   useNavigationStoreAssetsSelector,
//   useSettingsStoreAssetsSelector,
//   useWalletStoreAssetsSelector,
//   useExplorerStoreAssetsSelector,
//   useBrowserStoreAssetsSelector,
// } from '../../state';
// import {logEvent} from '../../utils/analytics';

import {Box, Button, HStack, IconButton, List} from 'native-base';
import {TabScreenContainer} from '../../components/tabScreenContainer';
import {TabScreenHeader} from '../../components/tabScreenHeader';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSliders} from '@fortawesome/free-solid-svg-icons/faSliders';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {HomeTabTitle} from '../../components/homeTabTitle';
import {faQrcode} from '@fortawesome/free-solid-svg-icons/faQrcode';
import {useState} from 'react';
import {AppColors} from '../../config';
import {PortfolioBalance} from '../../components/portfolioBalance';

export const AssetsScreen = () => {
  const [showQRCodeSheet, setShowQRCodeSheet] = useState(false);

  const [showSettingsSheet, setShowSettingsSheet] = useState(false);

  const onQRCodePress = () => {
    setShowQRCodeSheet(true);
  };

  const onSettingPress = () => {
    setShowSettingsSheet(true);
  };

  const onTokenListPress = () => {
    setShowTokenListSheet(true);
  };

  const onDepositPress = () => {
    setShowDepositSheet(true);
  };

  const onSendPress = () => {
    // setShowSelectCurrencySheet(true);
  };

  const onRefresh = () => {
    //
  };

  return (
    <TabScreenContainer>
      <TabScreenHeader>
        {/* <IconButton icon={faBars} onPress={onSettingPress} /> */}
        <Box />
        <HomeTabTitle screen="Assets" />

        {/* <IconButton icon={faQrcode} onPress={onQRCodePress} /> */}
        <Box />
      </TabScreenHeader>

      <List
        // onRefresh={onRefresh}
        // isRefreshing={explorerLoading}
        header={
          <Box key="assets-header">
            <PortfolioBalance
              previousBalance="5000"
              currentBalance="6000"
              currency="USD"
            />

            <HStack mt="33px" mb="31px" space="14px">
              <Button flex={1} onPress={onDepositPress}>
                Deposit
              </Button>

              <Button flex={1} onPress={onSendPress}>
                Send
              </Button>
            </HStack>
          </Box>
        }
        // sections={renderAssetsSections()}
        footer={
          <Button
            key="assets-footer"
            colorScheme="text"
            variant="link"
            onPress={onTokenListPress}
            _text={{color: AppColors.text[4], fontWeight: 400}}
            leftIcon={
              <FontAwesomeIcon
                icon={faSliders}
                color={AppColors.text[4]}
                size={20}
              />
            }>
            Manage currency list
          </Button>
        }
      />
    </TabScreenContainer>
  );
};
