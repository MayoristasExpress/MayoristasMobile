import React, { useContext } from "react";
import { Text, StyleSheet, Image, Dimensions, ScrollView, View, ImageBackground } from "react-native";
import CustomIconButton from "./componets/menu/MenuHamburguesa";
import { Micontexto } from "./context/Context";

const Home2 = () => {
  const { dataProductos } = useContext(Micontexto);

  return (
    <View style={styles.container}>
      <ScrollView>
        {dataProductos.map((item) => (
          <ScrollView contentContainerStyle={styles.productContainer} key={item.id_publicacion.toString()}>
            
            <View style={styles.productInfo}>
              
              <ImageBackground
              source={require('./assets/flag.png')}
              style={styles.backgroundImage}
              resizeMode="cover">
              <View style={styles.redRectangle}>
                <Text style={styles.priceText}>Precio Pack: ${item.precio_pack}</Text>
              </View>
              </ImageBackground>
              <Text style={styles.productName}>{item.marca}</Text>
              <Text style={styles.productDescription}>{item.descripcion}</Text>

            </View>
            <View style={styles.productImageContainer}>
              <Image source={{ uri: `http://192.168.1.3:4000/imagen/${item.imagen}` }} style={styles.productImage} />
            </View>


          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    backgroundColor: "#fff",
    paddingHorizontal: 35,
    paddingTop: 22,
    height: 550,
  },
  title: {
    fontSize: 50,
    marginTop: 20,
  },
  productContainer: {
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    maxHeight: 350,
    position: "relative",
    backgroundColor: "#f1f1f2",
  },

  productInfo: {
    flex: 1,
    marginRight: 20,
  },
  productImageContainer: {
    width: "50%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor:"#fff",
    borderRadius:100
  },
  productImage: {
    width: 121,
    height: 130,
    borderRadius: 10,
   
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#555",
  },
  redRectangle: {
    
    height: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },
  backgroundImage:{
    height:200,
    justifyContent:"center"

  },
  priceText: {
   
  },
});

export default Home2;
