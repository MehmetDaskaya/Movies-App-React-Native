import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native'
import React, {useState} from 'react'
import MoviePage from './MoviePage';
import {Ionicons} from '@expo/vector-icons'; 
import GlobalColors from '../../util/GlobalColors';
import AddFavorites from '../AddFavorites';


const API_IMG = "https://image.tmdb.org/t/p/w500";

const MoviesBox = ({title, poster_path, vote_average, overview, release_date, id}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const IMG_URL = API_IMG+poster_path;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
      <Modal

        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <TouchableOpacity 
        style={styles.modalButton}
        onPress={() => {setModalVisible(!modalVisible);
        }}>
          
          <Ionicons style={{}} color= "white" name="ios-arrow-back-circle-outline" size={50} />
          <Text style={styles.modalText}>Home Page</Text>
        </TouchableOpacity> 

        <MoviePage title={title} overview={overview} poster_path={poster_path} vote_average={vote_average} release_date={release_date} id={id}/>

      </Modal>
      </View>
        <View
          style={styles.movieCarousel}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
        <View style={styles.moviesCard}>
            <TouchableOpacity
          onPress={() => setModalVisible(true)}>
            <View  >
                <Image 
                style={styles.image}
                source={{uri:IMG_URL}}
                resizeMode={"cover"}/>
            </View>
            <View style={styles.movieTitleContainer}>
              <Text numberOfLines={1} style={styles.movieTitle}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>

        </View>
    </View>
  )
}

export default MoviesBox;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  text:{
    color:"white",
  },
  image:{
    width: 100,
    height: 154,
    resizeMode: "contain",
    borderRadius: 10,
    overflow: "hidden",
  },
  scrollView: {
    flexDirection: 'row',
  },
  movieCarousel: {
    paddingRight: 4,
  },
  modalButton: {
    backgroundColor: GlobalColors.DarkBlue,
    height: 70,
    width: "100%",
    paddingTop: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  modalText: {
    flex:3,
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },
  modal: {
    backgroundColor: GlobalColors.DarkBlue,
    flex:1,
  },
  movieTitleContainer:{
    flex:1,
    alignItems: "center",
  },
  movieTitle: {
    maxWidth: 100,
    fontSize: 12,
    fontWeight:"bold",
    color: "white",
  },
  moviesCard: {
    backgroundColor: GlobalColors.Navy,
    padding: 4,
    borderRadius: 10,
  },
});