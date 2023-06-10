import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Micontexto } from './context/Context';
import SearchBar from './componets/SearchBar';
import { orderBy } from 'lodash';
import { useNavigation } from '@react-navigation/native';

const NearbyLocations = () => {
  const { dataMayorista, nearestLocations } = useContext(Micontexto);
  const [filteredData, setFilteredData] = useState(dataMayorista);
  const [selectedLocation, setSelectedLocation] = useState(filteredData.length > 0 ? filteredData[0] : null);
  const navigation = useNavigation();
  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
    setSelectedLocation(filteredData.length > 0 ? filteredData[0] : null);
  };

  const renderItem = ({ item }) => {
    const foundLocation = filteredData.find((loc) => loc.id_mayorista === item.id);
    if (!foundLocation) {
      return null;
    }

    const handleGoToMayorista = (location) => {
      // Lógica para ir a la pantalla de mayorista con los detalles de la ubicación
      navigation.navigate('Home2');
    };

    return (
      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: `http://192.168.1.3:4000/imagen/${foundLocation.logo}` }} style={styles.banner} resizeMode="contain" />
        </View>
        <Text style={styles.distance}>Distancia: {item.distance.toFixed(2)} km</Text>
        <Text style={styles.distance}>Mayorista: {foundLocation.nombre_mayorista} </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleGoToMayorista(foundLocation)}
            style={[styles.button, { backgroundColor: '#f45d48' }]}
          >
            <Text style={styles.buttonText}>Ir a {foundLocation.nombre_mayorista}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const sortedData = orderBy(filteredData, (location) => location === selectedLocation, 'desc');

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.oferta_contenedor}>
        <Image source={require('./assets/100.jpg')} style={styles.oferta} resizeMode="contain" />
        <Text style={styles.oferta_text}>Ofertas</Text>
      </View>
      {nearestLocations.length > 0 ? (
        <ImageBackground
          source={require('./assets/pasillo.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Carousel
            data={nearestLocations}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={300}
            containerCustomStyle={styles.carouselContainer}
          />
        </ImageBackground>
      ) : (
        <Text>No se encontraron ubicaciones cercanas.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oferta_contenedor: {
    height: 200,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  oferta: {
    width: '100%',
    height: '100%',
  },
  slide: {
    height: 270,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    borderRadius: 20,
    marginTop: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 350,
  },
  banner: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    bottom: 0,
    
  },

  distance: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Ultra',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius:6,
    elevation:6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NearbyLocations;


