import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './screens/auth/GetStarted';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
