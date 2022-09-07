import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import { AuthContext } from './components/Context';


const Tab = createBottomTabNavigator();


export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

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
      dispatch({ type: 'REGISTER', id: userName, token: userToken });
    },
  }), []);

  useEffect(() => {
    setTimeout( async() => {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }
      catch(e){
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
                  <Tab.Navigator>
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="Favorites" component={FavoritesScreen} />
                  <Tab.Screen name="Login" component={LoginScreen} />
                </Tab.Navigator>
        ): 
        <LoginScreen/>}

      </NavigationContainer>
    </AuthContext.Provider>
  );
}
