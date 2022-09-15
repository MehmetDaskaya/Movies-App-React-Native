import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React,{useState} from "react";
import Box from "../components/Box";
import { favoritesSelector } from "../store/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import GlobalColors from "../util/GlobalColors";
import {Ionicons} from "react-native-vector-icons/Ionicons";
import MoviePage from "../components/movies/MoviePage";

const FavoritesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const favorites = useSelector(favoritesSelector);
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const favoritesItem = ({item, title, poster_path, vote_average, overview, release_date, id}) => {
    
    const IMG_URL = API_IMG + poster_path;

    return (
      <View>
        <TouchableOpacity
          style={styles.box}
        >
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
            >
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Ionicons
                  style={{}}
                  color="white"
                  name="ios-arrow-back-circle-outline"
                  size={50}
                />
                <Text style={styles.modalText}>Home Page</Text>
              </TouchableOpacity>

              <MoviePage
                title={title}
                overview={overview}
                poster_path={poster_path}
                vote_average={vote_average}
                release_date={release_date}
                id={id}
              />
            </Modal>
            <View style={styles.imageBox}>
              <Image
              style={styles.image}
              source={{uri:IMG_URL}}
              resizeMode={"cover"} />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.overview}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={favoritesItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalColors.DarkBlue,
    height: 120,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    paddingHorizontal: 6,
  },
  imageBox: {
    flex: 1,
    height: 100,
    marginHorizontal: 6,
    backgroundColor: "yellow",
    borderRadius: 12,
  },
  infoBox: {
    flex: 3,
    height: 100,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "white",
  },
    image:{
    width: 100,
    height: 154,
    resizeMode: "contain",
    borderRadius: 10,
    overflow: "hidden",
  },
});
