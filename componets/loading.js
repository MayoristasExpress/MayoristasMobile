import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loading= () => (
  <View style={styles.container}>
    <ActivityIndicator animating={true} color="#1995ad" style={styles.indicator} />
    <Text style={styles.text}>Mayoristas Express...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    marginBottom: 16,
    // Ajusta el tamaño del indicador aquí
    transform: [{ scale: 4 }], // Cambia el valor de scale para aumentar o disminuir el tamaño del indicador
  },
  text: {
    marginTop: 36,
  },
});

export default Loading;