import React from 'react';
import {Text,View,Image,TouchableOpacity } from 'react-native';
import styles from './styles';

const handleProfileModification = () => {
  // Function for Search
  console.log(`Profile Modificaiton :`);
};

const handleLogout = () => {
  // Function for Logout
  console.log(`Logout :}`);
};
const ProfileScreen = (props) => {

    return (

      <View>
        <View style={styles.container}>
            <Image
            source={require('../../../assets/images/PhotoCV.jpg')}
            style={styles.Image}>
            </Image>
            <Text style={styles.name}> Hey, Walid ! </Text>
            <Text style={styles.verifiedProfile}> Verified </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleProfileModification}>
        <Text style={styles.buttonText}>Modify Profile</Text>
        </TouchableOpacity>

        {/* Bio */}
        <View style={styles.container}>
                <Text style={styles.BioBlock}> Bio </Text>
                <Text style={styles.Bio}> Birthday </Text>
                <Text style={styles.Bio}> e-mail </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };



export default ProfileScreen;
