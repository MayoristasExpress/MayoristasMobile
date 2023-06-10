import React, { useContext } from "react";
import {  View, StyleSheet } from "react-native";
import CustomIconButton from "./componets/menu/MenuHamburguesa";
import { Micontexto } from "./context/Context";
import NearbyLocations from "./DistanceUtils";



const Home = () => {
  const { location, dataMayorista } = useContext(Micontexto)
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomIconButton />
      </View>
      <View style={styles.nearbi}>
        <NearbyLocations />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999
  },
 
  nearbi: {
    flex: 1,
    width: 400,
    height: 400,
    alignItems: "center",
    textAlign: "center"
  }
});
export default Home;