/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import HomeScreen from './src/screens/HomeScreen';
import SearchRecipe from './src/screens/Search';
import PopularRecipeScreen from './src/screens/PopularRecipe';
import LocalRecipeScreen from './src/screens/LocalRecipe';
import FavouriteScreen from './src/screens/Favourite';
import ProfileScreen from './src/screens/Profile';
// import RecipePage from './src/screens/RecipePage';
// import RegisterScreen from './src/screens/RegisterScreen';
// import RecipeListItem from './src/item/RecipeListItem.js';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import recipesData from './assets/data/RecipeList.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReceipeDetail from './src/screens/LocalReceipeDetail/ReceipeDetail';

import ScreenNavigations from './src/layout/Layout';
import React from 'react';
import { FlatList } from 'react-native';
import {
  View,
  Image, TouchableOpacity ,Button
} from 'react-native';


const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// function MainStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Welcome" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <ScreenNavigations>

      </ScreenNavigations>
      
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={LocalRecipeScreen} />
        <Tab.Screen name="Search" component={SearchRecipe} />
        <Tab.Screen name="Favourites" component={FavouriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="detail" component={ReceipeDetail} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}







export default App;

//     <NavigationContainer>  
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="SearchRecipe" component={SearchRecipe} />
//       <Stack.Screen name="Popular Recipe" component={PopularRecipeScreen} />
//       <Stack.Screen name="Local Recipe" component={LocalRecipeScreen} />
//       <Stack.Screen name="Favourite" component={FavouriteScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="HomeDetails" component={MainStack} />
//         <Tab.Screen name="Login" component={LoginScreen} />
//         <Tab.Screen name="Register" component={RegisterScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
