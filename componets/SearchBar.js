import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ dataMayorista, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = dataMayorista.filter((mayorista) =>
      mayorista.nombre_mayorista.toLowerCase().includes(query.toLowerCase())
    );
    onFilter(filteredData);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar"
        style={styles.searchbar}
        inputStyle={styles.searchbarInput}
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#078080',
    padding: 10,
    width:"100%",
    paddingRight:10,
   

    
  },
  searchbar: {
    width: '95%',
    marginLeft: 40,
    height: 35,
  },
  searchbarInput: {
    paddingBottom: 23,
  },
});

export default SearchBar;
