import React, { useContext, useState } from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Drawer, IconButton, useTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { Micontexto } from '../../context/Context';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');

const DrawerConfig = ({ onClose }) => {
    const { colors } = useTheme();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const {username} = useContext(Micontexto);
    const navigation = useNavigation();

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handlePressOutside = () => {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

    const handlePress = () => {
        onClose()
        navigation.navigate('Home2')
    };

    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <Drawer.Section
                title={"Bienvenido " + username.nombre_usuario + " !"}
                style={[
                    styles.drawerSection,
                    { height, width: width * 0.7, borderRightColor: colors.border, borderRightWidth: 1 },
                ]}
            >
                <Drawer.Item
                    label="Inicio"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => handlePress()}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/casa.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem // Agrega el estilo si el elemento está presionado
                    ]}
                />
                <Drawer.Item
                    label="Notificaciones"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => navigation.navigate('HomeNotificaciones')}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/campana_notificacion.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem
                    ]}
                />
                <Drawer.Item
                    label="Oferta"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => navigation.navigate('HomeOferta')}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/ofertas.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem
                    ]}
                />
                <Drawer.Item
                    label="Favoritos"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => navigation.navigate('HomeFavoritos')}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/favoritos.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem
                    ]}
                />
                <Drawer.Item
                    label="Soporte"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => navigation.navigate('HomeSoporte')}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/soporte-tecnico.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem
                    ]}
                />
                <Drawer.Item
                    label="Configuracion"
                    activeBackgroundColor={colors.primary}
                    activeTintColor={colors.white} // Cambia el color del texto activo a blanco
                    onPress={() => navigation.navigate('HomeConfiguracion')}
                    icon={({ color, size }) => (
                        <IconButton
                            icon={() => (
                                <Image
                                    source={require('../../assets/configuracion.png')}
                                    style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                            )}
                        />
                    )}
                    style={[
                        styles.drawerItem
                    ]}
                />
                <Drawer.Item 
                label="Volver" onPress={onClose}
                icon={({ color, size }) => (
                    <IconButton
                        icon={() => (
                            <Image
                                source={require('../../assets/volver.png')}
                                style={{ width: 50, height: 40, resizeMode: 'contain'}} />
                        )}
                    />
                )}
                 style={styles.drawerItem} />
            </Drawer.Section>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    drawerSection: {
        backgroundColor: '#fff', // Establece el color de fondo a blanco
        left: 0,
        top: 0,
        bottom: 0,
        fontSize : 0

    },
    drawerItem: {
        // Estilos por defecto del botón del Drawer
    },
    drawerItemPressed: {
        backgroundColor: 'red', // Cambia el color de fondo cuando el botón está presionado
    },
});

export default DrawerConfig;
