import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

import { AuthContext } from 'C:/Users/mehme/Desktop/task/components/Context';

const Navbar = () => {
    const { signOut, } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
        <View style={styles.header}>

            <View style={styles.logo}>
                
                <Image source={require('../assets/navbar-icon.png')}
                 style={{width: 50, height: 50,}}/>
                 <View style={styles.textContainer}>
                    <Text style={styles.text}>KREMBI</Text>
                    <Text style={styles.text}>MOVIES</Text>
                </View>
            </View>
            <View>
                
            </View>
            <View style={styles.iconLogout}>
                <AntDesign name="logout" size={30} color="white"
                onPress={() => {signOut()}} />
            </View>
        </View>
    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "#36618A",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        flex:8,
        flexDirection: 'row',
    },
    textContainer: {
        justifyContent: 'center',
    },
    text:{
        color:"white",
        fontSize: 12,
        fontWeight: "bold",
        alignSelf: "center",
    },
    iconLogout: {
        flex:1,
    },
});