import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Logique de recherche
    setResults([{ id: '1', name: 'Jane Doe', hobby: 'Cuisine' }]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Rechercher des loisirs"
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Rechercher" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.hobby}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
