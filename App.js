import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import GetStarted from './screens/auth/GetStarted';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';
import CategoryEvents from './screens/CategoryEvents';
import Categories from './screens/Categories';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <CategoryEvents />
        <StatusBar style="auto" />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
