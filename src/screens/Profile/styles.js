import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create ({
    container:{
        marginTop:50,
        marginLeft:30,
        marginRight:50,
        borderBottomWidth: 1, 
        borderBottomColor: 'black' 
    },
    BioBlock:{
        fontWeight:'bold',
        fontSize:30,
    },
    Bio:{
        marginTop:20,
        marginLeft:30,
        marginRight:50,
        fontWeight:'bold',
        fontSize:20
    },
    name:{
        fontSize:30,
        marginTop:50,
        fontWeight:'bold',
    },
    Image:{width: 150,
        height: 150,
        borderRadius: 150 / 2,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    verifiedProfile:{
        marginLeft:5,
        marginTop:10,
        fontSize:20
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        marginLeft:100,
        marginRight:100,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },

});

export default styles;
