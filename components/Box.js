import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Box = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imageBox}></View>
        <View style={styles.infoBox}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>Description</Text>
            
        </View>
    </View>
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