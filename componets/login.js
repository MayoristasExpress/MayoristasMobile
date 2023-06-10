import { StatusBar } from "react-native";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import BotonLogin from "./botones/BotonLogin";
import { Micontexto } from "../context/Context";
import PopupComponent from "./LoginError";
import UserValue from "./inputs/UserInput";
import PassValue from "./inputs/PassInput";
import { useNavigation } from '@react-navigation/native';

const Load = () => {
  const { login, cerror } = useContext(Micontexto);
  const navigation = useNavigation();
  const handleButtonPress = async () => {
    await login();
  
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logotipo.png")} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <UserValue />
        <PassValue />
        <BotonLogin onButtonPress={handleButtonPress} />
        <StatusBar style="auto" />
      </View>
      {cerror && <PopupComponent />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 90,
    color: "#000",
    fontWeight: "bold",
  },
  ingresa: {
    fontSize: 19,
    color: "gray",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
    paddingStart: 30,
    marginTop: 20,
    width: 350,
    height: 50,
    borderRadius: 30,
  },
});

export default Load;
