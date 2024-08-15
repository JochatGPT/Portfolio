import React from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, { id: Date.now().toString(), text: message }]);
    setMessage('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Tapez un message"
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
