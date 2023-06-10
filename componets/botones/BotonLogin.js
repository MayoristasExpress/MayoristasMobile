import React, { useState  } from "react";
import { StyleSheet , Text , View , TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



const BotonLogin = ({ onButtonPress }) => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
        console.log('true')
    }
    const handlePressOut = () => {
        setIsPressed(false);
    }
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onButtonPress}
        >
            <LinearGradient
                colors={isPressed ? ['#fe3422', '#fe6969', '#fe3422'] : ['#ff0000', '#ff6666', '#ff0000']}
                style={styles.button}
            >
                <Text style={styles.text}>Ingresar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 60,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});

export default BotonLogin;
