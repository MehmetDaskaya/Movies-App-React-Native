import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Box = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate( 'SignUpScreen' )} style={styles.box}>
        <View style={styles.container}>
            <View style={styles.imageBox}></View>
            <View style={styles.infoBox}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.description}>Description</Text>
                
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Box;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'teal',
        height: 120,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageBox:{
        flex:1,
        height: 100,
        marginHorizontal: 6,
        backgroundColor: 'yellow',
        borderRadius: 12,
    },
    infoBox:{
        flex:3,
        height: 100,
        marginHorizontal: 6,
        borderRadius: 12,
        backgroundColor: 'orange',
    },

});