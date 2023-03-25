import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 20,
        },
        button: {
          backgroundColor: '#E91E63',
          borderRadius: 25,
          padding: 10,
          marginBottom: 10,
          width: 200,
          alignItems: 'center',
        },
        buttonText: {
          color: '#fff',
          fontSize: 16,
        },
      });

export default styles;
