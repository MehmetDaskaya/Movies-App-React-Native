import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';

import { AuthContext } from './components/Context';
import GlobalColors from './util/GlobalColors';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import SignUpScreen from './screens/Authentication/SignUpScreen';
import MoviesData from './model/MoviesData';
import SplashScreen from './screens/SplashScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);


  function BottomTabsView() {
    const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null,
    }

    const loginReducer = (prevState, action) => {
      switch( action.type ) {
        case 'RETRIEVE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
          };
        case 'REGISTER':
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
        default:
    }}
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser[0].userToken);
        const userName = String(foundUser[0].username);
  
          try{
            userToken = 'asdfgh';
            console.log(userToken);
            await AsyncStorage.setItem('userToken', userToken);
          }
          catch(e){
            console.log(e);
          }
        
        console.log('user token: ', userToken);
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
  
      },
      signOut: async () => {
        try{
          await AsyncStorage.removeItem('userToken');
        }
        catch(e){
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
      signUp: (userName, password) => {
        let userToken;
        userToken = null;
        if(userName == 'user' && password == 'pass'){
          userToken = "asdas"
        }
        dispatch({ type: 'RETRIEVE_TOKEN', id: userName, token: userToken });
      },
    }), []);
    return (
      <>
      <AuthContext.Provider value={authContext}>
          {loginState.userToken !== null ? (                
          <Tab.Navigator
          screenOptions={{
            tabBarHideOnKeyboard: true
         }}
          >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
              headerShown: false,
              tabBarIcon: ({focused, size}) => <Ionicons style={{color: focused ? GlobalColors.Navy : GlobalColors.Grey}} name="home" size={size}/>
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} 
            options={{
              tabBarIcon: ({focused, size}) => <Ionicons style={{color: focused ? GlobalColors.Yellow : GlobalColors.Grey}} name="star" size={size} />
            }} />
          </Tab.Navigator>
          ):
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Movies" component={MoviesData} />
          </Stack.Navigator> 
          }
          </AuthContext.Provider>
      </>
    );
  }
  export default function App() {

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="BottomTabsView" component={BottomTabsView} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
