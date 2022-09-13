import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native'
import React, {useState} from 'react'
import MoviePage from './MoviePage';
import {Ionicons} from '@expo/vector-icons'; 
import GlobalColors from '../../util/GlobalColors';


const API_IMG = "https://image.tmdb.org/t/p/w500";

const MoviesBox = ({title, poster_path, vote_average, overview, release_date}) => {
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
        </TouchableOpacity> 

        <MoviePage title={title} overview={overview} poster_path={poster_path} vote_average={vote_average} release_date={release_date}/>

      </Modal>
      </View>
        <View
          style={styles.movieCarousel}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
        onPress={() => setModalVisible(true)}>
          <View  >
              <Image 
              style={styles.image}
              source={{uri:IMG_URL}}
              resizeMode={"cover"}/>
          </View>
        </TouchableOpacity>
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
    paddingRight:4
  },
  modalButton: {
    backgroundColor: GlobalColors.DarkBlue,
    height: 50,
    width: 50,
    borderRadius: 20,
    marginTop: 20,
  },
  modal: {
    backgroundColor: GlobalColors.DarkBlue,
  }
});