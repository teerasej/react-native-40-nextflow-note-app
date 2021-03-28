import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { useEffectAsync } from 'useeffectasync'

// import Font มาจาก package expo-font
import * as Font from 'expo-font';
// import Icon มาใช้งาน (ถ้าต้องการ)
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/home-page/HomePage';
import NewNotePage from './pages/new-note-page/NewNotePage';

import { Provider } from 'react-redux';
import configureStore from "./redux/store";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {

  const [isReady, setIsReady] = useState(false)

  
  useEffectAsync(async () => {
   
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })

   
    setIsReady(true)
  }, [])


  if (!isReady) {
    return <View></View>;

  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Note App" component={HomePage} />
          <Stack.Screen name="New Note Page" component={NewNotePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}