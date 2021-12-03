import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Animated, Text, TouchableOpacity, View } from 'react-native';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo } from '@expo/vector-icons';
// import Animated from 'react-native-reanimated';

// const Stack = createStackNavigator()
const Stack = createSharedElementStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Get Started" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Category Events" component={CategoryEvents} options={{ headerShown: false }} />
      <Stack.Screen name="Event Details" component={EventDetails} options={{ headerShown: false }} />
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
            open: { animation: 'timing', config: { duration: 300 } },
            close: { animation: 'timing', config: { duration: 300 } }
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
  )
}

const { width } = Dimensions.get('window')
const MARGIN = 16
const TAB_BAR_WIDTH = width - 2 * MARGIN
const TAB_WIDTH = TAB_BAR_WIDTH / 2

const MyTabBar = ({ state, descriptors, navigation }) => {
  const [translateX] = useState(new Animated.Value(0))

  const translateTab = (index) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    translateTab(state.index)
  }, [state.index])

  return (
    <View style={styles.tabContainer}>
      <View style={styles.slidingTabContainer}>
        <Animated.View style={[styles.slidingTab, { transform: [{ translateX }] }]} />
      </View>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            })
          }

          const tabBarIcon = options.tabBarIcon

          return (
            <TouchableOpacity
              style={{ flex: 1, alignItems: 'center' }}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <TabIcon tabIcon={tabBarIcon} isFocused={isFocused} label={label} index={state.index} />
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const TabIcon = ({ isFocused, tabIcon, label, index }) => {

  const [translateY] = useState(new Animated.Value(0))

  const translateIcon = (val) => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    if (isFocused) {
      translateIcon(-16)
    } else {
      translateIcon(0)
    }
  }, [index])

  return (
    <>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {isFocused ? tabIcon.inactiveIcon : tabIcon.activeIcon}
      </Animated.View>
      <Text style={{ color: isFocused ? '#a34172' : '#222' }}>
        {label}
      </Text>
    </>
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
            <Tab.Navigator
              screenOptions={{ headerShown: false }}
              tabBar={props => <MyTabBar {...props} />}
            >
              <Tab.Screen
                name="Home"
                component={AppStack}
                options={() => ({
                  tabBarIcon: {
                    activeIcon: <AntDesign name="home" size={35} color="#2d3436" />,
                    inactiveIcon: <Entypo name="home" size={35} color="white" />
                  },

                })}
              />
              <Tab.Screen name="Categories" component={CategoryStack}
                options={() => ({
                  tabBarIcon: {
                    activeIcon: <AntDesign name="appstore-o" size={33} color="#2d3436" />,
                    inactiveIcon: <AntDesign name="appstore1" size={33} color="white" />
                  },
                })}
              />
            </Tab.Navigator>
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
  tabContainer: {
    flexDirection: 'row',
    width: TAB_BAR_WIDTH,
    height: 60,
    position: 'absolute',
    alignSelf: 'center',
    bottom: MARGIN,
    backgroundColor: '#f2dfe8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f2dfe8',
    alignItems: 'center'
  },
  slidingTab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#a34172',
    bottom: 25,
    borderWidth: 4,
    borderColor: 'white'
  }
});
