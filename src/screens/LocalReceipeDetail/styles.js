import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
    resizeMode: 'contain',
  },

  ingredientsContainer: {
    marginLeft: 30,
    marginRight: 10,
    marginTop: 10,
  },

  bullet: {
    fontSize: 20,
    color: 'black',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 2,
    marginTop: 2,
  },
  bulletContainer: {
    width: 30,
    alignItems: 'center',
  },
  bullet: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    flex: 1,

  },
  title: {
    fontSize: 23,
    color: 'black',
    marginLeft: 5,
  },
  instructionsContainer: {
    width: Dimensions.get('window').width - 20,
    marginLeft: 30,
  },
  Ingredientstitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 5,
  },
  InstructionsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 10,
  },
  receipeDetailtitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  renderInstructionTitle:{
    fontSize: 20,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  }
});

export default styles;
