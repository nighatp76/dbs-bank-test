import React from 'react';
import Splash from '../screens/Splash';
import Home from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screens = createNativeStackNavigator();


const MainRoute = () => {

  return (
    <screens.Navigator initialRouteName="Splash">

      <screens.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <screens.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </screens.Navigator>

  );
};
export default MainRoute;