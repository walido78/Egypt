

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
    const handleLoginPress = () => {
      navigation.navigate('BottomTab');
        //import firebase from '../../../firebase.js';
        // firebase
        //   .auth()
        //   .signInWithEmailAndPassword(email, password)
        //   .then(() => {
        //     // Navigate to the home screen or other authenticated screen
        //     navigation.navigate('Home');
        //   })
        //   .catch((error) => {
        //     // Handle authentication errors here
        //   });
        
      };

  const handleRegisterPress = () => {
    // navigate to the login page when the login button is pressed
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.logo}>Egypt Recipes</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
