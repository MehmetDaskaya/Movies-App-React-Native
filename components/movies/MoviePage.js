import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

import GlobalColors from '../../util/GlobalColors';



const MoviePage = ({overview, modalVisible, setModalVisible, poster_path, title, vote_average, release_date  }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const IMG_URL = API_IMG+poster_path;
  return (
    <View style={styles.container}>

        <View style={styles.textContainer}>
            <Text style={[styles.title, styles.text]}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image}
            source={{uri:IMG_URL}}
            resizeMode={"cover"}/>
        </View>
        <View>
          <View>
            <Text>{vote_average}</Text>   
          </View>
          <View>
            <Text style={[styles.text,styles.subTitle]}>Description</Text>
            <Text style={styles.text}>{overview}</Text>
          </View>
          <View>
            <Text style={styles.text}>{release_date}</Text>
          </View>
        </View>
    </View>
  )
}

export default MoviePage

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: GlobalColors.DarkBlue,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
  },
  text: {
    color: "white",
  },
  imageContainer: {
    alignItems: "center",
  },
  image:{
    width: 200,
    height: 320,
    resizeMode: "contain",
    borderRadius: 20,
  },

});