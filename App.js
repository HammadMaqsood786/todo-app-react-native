import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const listItems = () => {
    const tempList = [...list];
    tempList.push(text);
    setList(tempList);
    setText('');
    console.log()
  
  }

 

  // const Item = ({ title }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  // const renderListItem = ({ item }) => {
  //   <Item title={item} />
  // }

  console.log("the text value", text)

  return (
    <View style={styles.container}>
      <Text>This is My First React Native assignment</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}

      />

      <Button
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={listItems}
      />

      <FlatList
        data={list}
        renderItem={listItems}
        // keyExtractor={item => item.id}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 200,
    backgroundColor: 'black',
    color: 'white',

  },

  list: {
    width: 300,
    flex: 0.3,
    borderWidth: 2,
  }
});
