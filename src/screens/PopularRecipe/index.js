import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const PopularRecipe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recette populaire</Text>
      <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/200' }} />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna eget sem blandit
        suscipit. In hac habitasse platea dictumst.
      </Text>
    </View>
  );
};

export default PopularRecipe;
