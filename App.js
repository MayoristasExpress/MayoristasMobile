import React, { useContext, useState, useEffect } from "react";
import {  StyleSheet } from "react-native";
import Loading from "./componets/loading";
import Loguin from "./componets/login";
import { AppContext, Micontexto } from "./context/Context";
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home2 from "./HomeMayorista";
import HomeNotificaciones from "./HomeNotificaciones";
import HomeOferta from "./HomeOferta";
import HomeFavoritos from "./HomeFavoritos";
import HomeSoporte from "./HomeSoporte";
import HomeConfiguracion from "./HomeConfiguracion";
import Home from "./Home";
const Stack = createStackNavigator();

function App() {
  const [fonstLoaded] = useFonts({
    Ultra: require("./assets/fonts/Brown.ttf"),
    Chrusty: require("./assets/fonts/ChrustyRock-ORLA.ttf"),
    MACROS: require("./assets/fonts/MACROS.ttf"),
    Rastalia: require("./assets/fonts/Rastalia.ttf"),
    ShortBaby: require("./assets/fonts/ShortBaby.ttf")
  })

  const [isLoading, setIsLoading] = useState(true);
  const { logged,  } = useContext(Micontexto);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3999);

    return () => clearTimeout(timer);
  }, []);

  if (!fonstLoaded || isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {logged ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="HomeNotificaciones" component={HomeNotificaciones} />
            <Stack.Screen name="HomeOferta" component={HomeOferta} />
            <Stack.Screen name="HomeFavoritos" component={HomeFavoritos} />
            <Stack.Screen name="HomeSoporte" component={HomeSoporte} />
            <Stack.Screen name="HomeConfiguracion" component={HomeConfiguracion} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Loguin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },
});

export default () => (
  <AppContext>
    <App />
  </AppContext>
);
