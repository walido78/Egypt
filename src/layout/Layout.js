import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {AllScreens} from '../constants/AllScreens';
const ScreenNavigations = () => {
  return (
    
    <Stack.Navigator initialRouteName="Login">
    {AllScreens.map(({ name, component, options }, index) => (
      <Stack.Screen
        key={index.toString()} // add a unique key prop using the index
        name={name}
        component={component}
        options={options}
      />
    ))}
  </Stack.Navigator>
  );
};

export default ScreenNavigations;
