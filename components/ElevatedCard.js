import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <View style={style.heading}>
        <Text>Trending</Text>
        <Text>view more</Text>
      </View>
      <View style={style.container}>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://www.freepnglogos.com/uploads/cricket-logo-png/cricket-zealand-png-14.png',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://www.freepnglogos.com/uploads/cricket-logo-png/india-national-cricket-team-24.png',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://www.freepnglogos.com/uploads/cricket-logo-png/pakistan-cricket-team-18.png',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://static.wikia.nocookie.net/internationalcricket/images/c/c9/Cricket_West_Indies.png/revision/latest?cb=20211028075806',
            }}
          />
        </View>
        <View style={style.card}>
          <Image
            style={style.image}
            source={{
              uri: 'https://seeklogo.com/images/A/acb-afghanistan-cricket-board-logo-CF20AE82BA-seeklogo.com.png',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 12,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 14,
  },
  card: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#f1f3f4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '50%',
    height: '50%',
  },
});

export default ElevatedCard;
