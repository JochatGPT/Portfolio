import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur HobbyMatch!</Text>
      <Button
        title="Commencer"
        onPress={() => navigation.navigate('Profile')}
        color={styles.button.backgroundColor}
      />
    </View>
  );
};


export default HomeScreen;
