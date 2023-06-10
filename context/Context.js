import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import * as Location from "expo-location"

const Micontexto = createContext();

const AppContext = ({ children }) => {


  const [InputValueU, setInputValueU] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState(null);
  const [logged, setLogged] = useState(false);
  const [cerror, setCerror] = useState(false);
  const [msgerror, setMsgerror] = useState('');

  const [dataMayorista, setDataMayorista] = useState('');
  const [location, setLocation] = useState(null);
  const [nearestLocations, setNearestLocations] = useState([]);

  const login = async () => {
    try {
      const nombreUsuario = InputValueU;
      const contrasena = inputValue;
      const response = await axios.post('http://192.168.1.3:4000/login', {
        nombre_usuario: nombreUsuario,
        contrasena: contrasena,
      });
      setUsername(response.data.user);
      setLogged(response.data.logged);
      if (response.data.error) {
        setCerror(response.data.error);
        setMsgerror(response.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMayoristas = async () => {
    try {
      const response = await axios.get('http://192.168.1.3:4000/mayoristas');
      setDataMayorista(response.data.servicios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMayoristas();
  }, []);

  useEffect(() => {
    if (logged) {
      getLocationAsync();
    }
  }, [logged]);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    if (dataMayorista && location) {
      const latitud = location.coords.latitude;
      const longitud = location.coords.longitude;

      const distances = dataMayorista.map(local => {
        const id = local.id_mayorista;
        const localLatitud = local.latitud;
        const localLongitud = local.longitud;
        const distance = calculateDistance(latitud, longitud, localLatitud, localLongitud);
        return { id, distance };
      });

      const sortedLocations = distances.sort((a, b) => a.distance - b.distance);
      const nearest = sortedLocations.slice(0, 5);
      setNearestLocations(nearest);
    }
  };

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
 
  const [dataProductos , setDataProductos] = useState('') 
  console.log(dataProductos)
  const getProductos = async () => {
    try {
      const response = await axios.get('http://192.168.1.3:4000/servicios');
      setDataProductos(response.data.servicios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);








  return (
    <Micontexto.Provider value={{
      setInputValue,
      inputValue,
      InputValueU,
      setInputValueU,
      login,
      username,
      logged,
      cerror,
      setCerror,
      setLogged,
      msgerror,
      dataMayorista,
      location,
      nearestLocations,
      dataProductos
    }}>
      {children}
    </Micontexto.Provider>
  );
};

export { Micontexto, AppContext };
