import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Button title="save" color="red" />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  textbox: {
    width: 100,
    padding: 10,
    borderColor: 'red',
  },
});

export default App;
