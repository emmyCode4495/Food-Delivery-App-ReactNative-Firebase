import React from 'react';
import { StyleSheet,View,StatusBar,Text} from 'react-native';
import Header from './src/components/header';
import {colors} from './src/global/styles'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light content"
      backgroundColor= {colors.statusBar} />     
        <Header title="MY ACCOUNT" type="arrow-left"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
