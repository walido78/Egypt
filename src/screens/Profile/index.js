import React from 'react';
import {Text,View,Image } from 'react-native';
import styles from './styles';


const ProfileScreen = (props) => {

    return (

      <View>
        <View style={styles.container}>
            <Image
            source={require('../../../assets/images/PhotoCV.jpg')}
            style={styles.Image}>
            </Image>
            <Text style={styles.name}> Heys, Walid ! </Text>
        </View>

        {/* Verified profile */}
        <View style={styles.container}>
                <Text style={styles.verifiedProfile}> You have a verified profile </Text>
        </View>

      </View>
    );
  };



export default ProfileScreen;
