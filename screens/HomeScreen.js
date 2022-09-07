import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

import { AuthContext } from 'C:/Users/mehme/Desktop/task/components/Context';

const HomeScreen = () => {

    const { signOut, } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <AntDesign name="logout" size={36} color="white"
            onPress={() => {signOut()}} />
        </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        height: 100,
        width: '100%',
        backgroundColor: 'blue',
    },
});