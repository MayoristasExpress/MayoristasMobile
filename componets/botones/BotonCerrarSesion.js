import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Micontexto } from "../../context/Context";


const ButonCerrarSesion = () => {
    const {setLogged} = useContext(Micontexto)
  
  const handleLogout = () => {
    setLogged(false)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#ff0000",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ButonCerrarSesion;
