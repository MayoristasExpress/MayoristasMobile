import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';




const MayoristaComponenteHome = () => {
  const entries = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={entries}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );


}


const styles = StyleSheet.create({
  slide: {
    width: 300,
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default MayoristaComponenteHome;
