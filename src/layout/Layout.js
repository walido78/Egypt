import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {AllScreens} from '../constants/AllScreens';
const ScreenNavigations = () => {
  return (
    
    <Stack.Navigator initialRouteName="Login">
      {AllScreens.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ScreenNavigations;
