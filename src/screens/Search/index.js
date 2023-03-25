import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
const SearchRecipe = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Fonction pour lancer la recherche
    console.log(`Recherche de la recette : ${search}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche de recettes</Text>
      <TextInput
        style={styles.input}
        placeholder="Recherchez une recette"
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};



export default SearchRecipe;