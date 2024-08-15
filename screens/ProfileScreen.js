import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: 'https://example.com/profile.jpg' }} style={{ width: 100, height: 100 }} />
      <Text>Nom: John Doe</Text>
      <Text>Loisirs: Randonnée, Cuisine, Jeux Vidéo</Text>
    </View>
  );
};

export default ProfileScreen;
