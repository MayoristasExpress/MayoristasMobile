import React, { useContext, useState } from 'react';
import { TextInput, View, DefaultTheme } from 'react-native-paper';
import { Micontexto } from '../../context/Context';

const UserValue = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { setInputValueU , InputValueU } = useContext(Micontexto);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red', // Cambiar el color de los bordes a rojo
    },
  };

  return (
    
      <TextInput
        mode="outlined"
        label="Usuario"
        value={InputValueU}
        onChangeText={setInputValueU}
        focused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ width: '90%' }}
        theme={theme} // Aplicar el tema personalizado
      />
     
  );
};

export default UserValue
