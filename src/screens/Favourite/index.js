import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';


const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>
      <Text style={styles.subtitle}>No favourites for now</Text>
    </View>
  );
};

export default Favourite;

