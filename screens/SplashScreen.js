import { View, Text, ActivityIndicator, StyleSheet  } from 'react-native'
import React from 'react'

const SplashScreen = () => {


  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',   
    }
});