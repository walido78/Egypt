
import React, {Component} from 'react';
import Tab_Home from '../../../assets/images/Tab_Home.png';
import Tab_Profile from '../../../assets/images/Tab_Profile.png';
import ProfileScreen from '../Profile';
import SearchRecipe from '../Search';
import LocalRecipeScreen from '../LocalRecipe';
import FavouriteScreen from '../Favourite';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  BackHandler,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBarMain}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          console.log('Route.Key---->>>' + route.name);
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const getImageName = () => {
            console.log("route", route.name)
          if (route.name == 'Home') {
            return Tab_Home;
          } else if (route.name === 'Feed') {
            return 'Tab_Profile';
          } else if (route.name === 'Login') {
            return 'Tab_Profile';
          } else if (route.name === 'Chart') {
            return 'Tab_Home';
          }
          else if (route.name === 'Profile') {
            return Tab_Profile;
          }
          
        };
        var selectedTabBackgroundColor = isFocused ? 'black' : 'black';
        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              height: 90,
              marginTop: 0,
            }}>
            <View
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                borderRadius: 30,
                marginTop: 10,
              }}>
              <Image

                source={getImageName()}
                resizeMode={'contain'}
                style={styles.tabIconStyle}
                tintColor={selectedTabBackgroundColor}
              />
            </View>
            <Text
              style={{
                color: selectedTabBackgroundColor,
                marginTop: 5,
                fontSize: 13,
                textAlign: 'center',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default class TabBarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        return true;
      });
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Home" component={LocalRecipeScreen}   options={{headerShown: true}} />
          <Tab.Screen name="Search" component={SearchRecipe} options={{headerShown: true}} />
          <Tab.Screen name="Favourites" component={FavouriteScreen} options={{headerShown: true}} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}} />
        </Tab.Navigator>
       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  borderBottomStyle: {
    marginTop: 2,
    position: 'absolute',
    height: 8,
    borderWidth: 1.5,
  },
  tabIconStyle: {
    height: 22,
    backgroundColor: 'transparent',
    width: 22,
  },
  tabBarMain: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 90,
    justifyContent: 'center',
    marginBottom: -34,
    elevation: 7,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
      