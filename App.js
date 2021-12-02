import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import GetStarted from './screens/auth/GetStarted';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';
import CategoryEvents from './screens/CategoryEvents';
import Categories from './screens/Categories';
import EventDetails from './screens/EventDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store';
import { Init } from './store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// const Stack = createStackNavigator()
const Stack = createSharedElementStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Get Started" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Category Events" component={CategoryEvents} options={{ headerShown: false }} />
      <Stack.Screen
        name="Event Details"
        component={EventDetails}
        options={{
          headerShown: false,
          gestureEnabled: true,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}}
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          }
        }}
      />
    </Stack.Navigator>
    // <View style={styles.container}>
    //   <CategoryEvents />
    //   <StatusBar style="auto" />
    // </View>
  )
}

const RootNavigation = () => {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  const token = useSelector(state => state.AuthReducers.authToken)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const init = async () => {
    await dispatch(Init())
    setLoading(false)
  }

  useEffect(() => {
    init()
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (loading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='black' />
    </View>
  } else {
    return (
      <NavigationContainer>
        {
          token === null ?
            <AuthStack />
            :
            <AppStack />

        }
      </NavigationContainer>
    );
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
