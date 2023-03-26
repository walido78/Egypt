import {View, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchRecipe from '../screens/Search';
import PopularRecipeScreen from '../screens/PopularRecipe';
import LocalRecipeScreen from '../screens/LocalRecipe';
import FavouriteScreen from '../screens/Favourite';
import BottomTab from '../screens/TabBar/BottomTab';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LocalReceipeDetail from '../screens/LocalReceipeDetail/ReceipeDetail';
export const AllScreens = [
    {
        name: 'detail',
        screen: 'LocalReceipeDetail',
        component: LocalReceipeDetail,
        options: {
          title: 'LocalReceipeDetail',
          headerShown: true,
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Text style={{color: 'white', fontSize: 16}}>LocalReceipeDetail</Text>
            </View>
          ),
        },
      },
  {
    name: 'BottomTab',
    screen: 'BottomTab',
    component: BottomTab,
    options: {
      title: 'BottomTab',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>BottomTab</Text>
        </View>
      ),
    },
  },
  {
    name: 'Home',
    screen: 'Home',
    component: HomeScreen,
    options: {
      title: 'Home',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>Welcome</Text>
        </View>
      ),
    },
  },
  {
    name: 'SearchRecipe',
    screen: 'SearchRecipe',
    component: SearchRecipe,
    options: {
      title: 'SearchRecipe',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>SearchRecipe</Text>
        </View>
      ),
    },
  },
  {
    name: 'LocalRecipeScreen',
    screen: 'LocalRecipeScreen',
    component: LocalRecipeScreen,
    options: {
      title: 'LocalRecipeScreen',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>LocalRecipeScreen</Text>
        </View>
      ),
    },
  },
  {
    name: 'FavouriteScreen',
    screen: 'FavouriteScreen',
    component: FavouriteScreen,
    options: {
      title: 'FavouriteScreen',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>FavouriteScreen</Text>
        </View>
      ),
    },
  },
  {
    name: 'PopularRecipeScreen',
    screen: 'PopularRecipeScreen',
    component: PopularRecipeScreen,
    options: {
      title: 'PopularRecipeScreen',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>PopularRecipeScreen</Text>
        </View>
      ),
    },
  },
  {
    name: 'Login',
    screen: 'Login',
    component: LoginScreen,
    options: {
      title: 'LoginScreen',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>LoginScreen</Text>
        </View>
      ),
    },
  },
  {
    name: 'Register',
    screen: 'Register',
    component: RegisterScreen,
    options: {
      title: 'RegisterScreen',
      headerShown: true,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>RegisterScreen</Text>
        </View>
      ),
    },
  },
];
