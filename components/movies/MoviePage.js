import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native'
import React, {useCallback, useState, useReducer} from 'react'

import GlobalColors from '../../util/GlobalColors';
import AddFavorites from '../AddFavorites';
import { useDispatch, useSelector } from 'react-redux';
import {favoriteAction} from '../../store/action';
import {deleteFavoriteAction} from '../../store/action';
import { favoritesSelector } from '../../store/selectors';


const MoviePage = (item) => {

  const {
    overview,
     modalVisible,
      setModalVisible,
      poster_path,
        title,
         vote_average,
          release_date,
          id  
  } = item

  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const IMG_URL = API_IMG+poster_path;

  const dispatch = useDispatch();
  const addToFavorites = (item) => {

    dispatch(favoriteAction(item));
  };

  const deleteFromFavorites = (item) => {
    dispatch(deleteFavoriteAction(item));
  }

  const favorites = useSelector(favoritesSelector);
  console.log(1,favorites);

  return (
    <ScrollView style={styles.container}>
        <AddFavorites onPress={() => addToFavorites(item)}/>
        {/* <Button title="Delete from Favorites" onPress={() => deleteFromFavorites(item)}/> */}
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image}
            source={{uri:IMG_URL}}
            resizeMode={"cover"}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={[styles.title, styles.text]}>{title}</Text>
        </View>
        <View>
          <View>
            <Text style={[styles.text]}>Movie id: {id}</Text>
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
    </ScrollView>
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
    padding: 20,
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