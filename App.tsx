import React from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NativeBaseTheme} from './src/config';
import {SplashScreen} from './src/screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ActivityScreen} from './src/screens/home/activity';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AssetsScreen} from './src/screens/home/assets';
import {SwapScreen} from './src/screens/home/swap';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" />
      {/* <SplashScreen /> */}
      {/* <WelcomeScreen navigation={undefined} route={undefined} /> */}
      {/* <NavigationContainer ref={navigation} theme={NavigationTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          barStyle={{backgroundColor: '#eee'}}>
          <Tab.Screen
            name="Assets"
            component={AssetsScreen}
            options={{
              tabBarLabel: 'Assets',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Swap"
            component={SwapScreen}
            options={{
              tabBarLabel: 'Swap',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={ActivityScreen}
            options={{
              tabBarLabel: 'Activity',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
