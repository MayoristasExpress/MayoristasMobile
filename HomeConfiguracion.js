import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomIconButton from "./componets/menu/MenuHamburguesa";

const HomeConfiguracion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomIconButton />
      </View>
      <Text style={styles.title}> CONFIGURACION </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 35
  },
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999
  },
  title: {
    fontFamily: 'Ultra',
    fontSize: 50,
    marginTop: 300,
  },
});
export default HomeConfiguracion;