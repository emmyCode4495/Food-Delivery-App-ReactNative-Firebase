import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet,View,StatusBar,Text} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/rootNavigator';

import SignInScreen from './src/screens/authScreens/SigninScreen';
import SignInWelcomeScreen from './src/screens/authScreens/signInWelcomeScreen';
import HomeScreen from './src/screens/contentScreens/homeScreen';
import { SignInContextProvider } from './src/context/authContext';

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.statusBar} />     
        <RootNavigator/>
      </View>
    </SignInContextProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
