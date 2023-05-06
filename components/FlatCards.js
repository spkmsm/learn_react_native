import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <View style={style.container}>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.hindustantimes.com/img/2022/10/23/1600x900/DH_1666528558926_1666528565669_1666528565669.png',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRatNgAlIWmD1NEMan9fOWcDkBrSKIbkpZMMrbttCPAWZaSYNAs0XRyRFY8nEd77ULYZQ&usqp=CAU',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/4/3/original/disney.jpg',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/12/Indian-But-Not-Indian-Food-feature.jpg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    color: 'black',
    fontWeight: 'bold',
    padding: 1,
    fontSize: 20,
  },
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
    gap: 10,
  },
  card: {
    width: '60%',
    height: 150,
    backgroundColor: 'silver',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
});

export default FlatCards;
