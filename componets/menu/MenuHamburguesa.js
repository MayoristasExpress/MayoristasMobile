import React, { useState } from 'react';
import { Drawer, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerConfig from './DrawerConfig';

const CustomIconButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {!isDrawerOpen && (
        <IconButton
          icon={() => <Icon name="menu" size={40} color="#F1F1F2" />}
          onPress={toggleDrawer}
          color="blue"
        />
      )}
      {isDrawerOpen && <DrawerConfig onClose={toggleDrawer} />}
    </>
  );
};

export default CustomIconButton;
