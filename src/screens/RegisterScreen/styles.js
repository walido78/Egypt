import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 24,
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 4,
          padding: 8,
          marginVertical: 8,
          width: '80%',
          fontSize: 16,
        },
        button: {
          backgroundColor: '#0099ff',
          padding: 12,
          borderRadius: 4,
          marginTop: 24,
        },
        buttonText: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        },
      });
export default styles;
