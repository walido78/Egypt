import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
const ReceipeDetail = () => {
  const [receipeDetail, setReceipeDetail] = useState();
  const route = useRoute();

  useEffect(() => {
    setReceipeDetail(route?.params.item);
  }, []);

 

  const renderInstruction = ({item}) => (
    <View style={styles.listItem}>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>• </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.renderInstructionTitle}>{item}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: receipeDetail?.image}} />
        <Text style={styles.receipeDetailtitle}>{receipeDetail?.name}</Text>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.Ingredientstitle}>Ingredients:</Text>
          <Text>
            {receipeDetail?.utensils.map(item => {
              return (
                <Text style={styles.title}>
                  {item}
                  {', '}
                </Text>
              );
            })}
          </Text>
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.InstructionsTitle}>Instructions:</Text>
          <FlatList
            horizontal={false}
            data={receipeDetail?.instructions}
            renderItem={renderInstruction}
            keyExtractor={item => Math.random() * 100}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ReceipeDetail;

// <FlatList

// //  numColumns={3}
//   scrollEnabled={false}
//   horizontal={true}
//   data={receipeDetail?.utensils}
//   renderItem={renderItem}
//   keyExtractor={item => Math.random() * 100}
// />
// const renderItem = ({item}) => (
//   <View style={styles.listItem}>
//     <View style={styles.titleContainer}>
//       <Text style={styles.title}>
//         {item}
//         {', '}
//       </Text>
//     </View>
//   </View>
// );