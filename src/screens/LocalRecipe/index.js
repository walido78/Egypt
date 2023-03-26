import {useNavigation} from '@react-navigation/native';
import recipes from '../../../assets/data/recepies';
import React, {useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
const LocalRecipe = () => {
  const navigation = useNavigation();

  const handleItemPress = item => {
    navigation.navigate('detail', {item});
  };

  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        onPress={() => handleItemPress(item)}
        style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Local Recipe</Text>
      <FlatList
        data={recipes.recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default LocalRecipe;

// const DATA = [
//   {
//     id: '1',
//     title: 'Koshari',
//     image: require('../../../assets/images/EgyptianKoshari.jpg'),
//     description: 'Koshari is a popular Egyptian street food that originated in the 19th century. It is a vegan dish that consists of rice, macaroni, lentils, chickpeas, and a spiced tomato sauce.'
//   },
//   {
//     id: '2',
//     title: 'Ful Medames',
//     image: require('../../../assets/images/ful-medames.jpg'),
//     description: 'Ful medames is a traditional Egyptian breakfast dish made with fava beans, garlic, lemon juice, and olive oil. It is often served with pita bread and toppings like chopped tomatoes, onions, and parsley.'
//   },
//   {
//     id: '3',
//     title: 'Molokhia',
//     image: require('../../../assets/images/molokheya.jpg'),
//     description: 'Molokhia is a popular Egyptian soup made from jute leaves, chicken or rabbit, and a flavorful broth. It is often served with rice and bread.'
//   },
//   {
//         id: '4',
//         title: 'Fasolia',
//         image: require('../../../assets/images/fassolia.png'),
//         description: 'Molokhia is a popular Egyptian soup made from jute leaves, chicken or rabbit, and a flavorful broth. It is often served with rice and bread.'
//       },
// ];

// const renderItem = ({ item }) => {
//   console.log("recepies",item)
//   (
//   <View style={styles.itemContainer}>
//     <Image style={styles.image} source={item.image} />
//     <Text style={styles.title}>{item.title}</Text>
//   </View>
// )};
