import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import Box from "../Box";
import { Ionicons } from "@expo/vector-icons";
import GlobalColors from "../../util/GlobalColors";
import MoviePage from "./MoviePage";

export default function SearchMovies({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  id,
  props,
}) {
  const searchMovies = async (e) => {
    // e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=82deb1fcd05b4efc1a500a3def387a13&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
      setOuterModalVisible(!outerModalVisible);
    } catch (err) {
      console.error(err);
    }
  };
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [outerModalVisible, setOuterModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  let IMG_URL = API_IMG + movies.poster_path;

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search..."
          value={query}
          onChangeText={(text) => setQuery(text)}
        ></TextInput>
        <Button onPress={searchMovies} title="Search" />

        <Modal
          animationType="slide"
          transparent={false}
          visible={outerModalVisible}
        >
          <View style={styles.searchFrame}>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                setOuterModalVisible(!outerModalVisible);
              }}
            >
              <Ionicons
                style={{}}
                color="white"
                name="ios-arrow-back-circle-outline"
                size={50}
              />
              <Text style={styles.modalText}>Home Page</Text>
            </Pressable>
            <Text>
              {movies.map(
                (movie) => (
                  (IMG_URL = API_IMG + movie.poster_path),
                  (
                    <Pressable
                      style={styles.containerAlt}
                      onPress={modalHandler}
                    >
                      <View>
                        <Image
                          style={styles.image}
                          key={movie.id}
                          source={{ uri: IMG_URL }}
                          resizeMode={"cover"}
                        />
                      </View>
                      <View style={styles.infoBox}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.description}>
                          {movie.vote_average}
                        </Text>
                      </View>
                    </Pressable>
                  )
                )
              )}
            </Text>
            {movies.map((movie) => (
              <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
              >
                <Pressable
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
                </Pressable>

                <MoviePage
                  title={movie.title}
                  overview={movie.overview}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                  id={movie.id}
                />
              </Modal>
            ))}
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //   containerAlt: {
  //     flex: 1,
  //     paddingHorizontal: 20,
  //     backgroundColor: "#223343",
  //     flexDirection: "row",
  //     height: 120,
  //     width: "100%",
  //   },

  searchBox: {
    fontSize: 16,
    fontWeight: "300",
    padding: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 20,
  },

  searchFrame: {
    backgroundColor: GlobalColors.DarkBlue,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    padding: 10,
    maxWidth: "100%",
    height: "100%",
  },
  searchCard: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    height: 120,
    borderRadius: 8,
    width: "100%",
    marginHorizontal: 40,
    borderBottomColor: "black",
    borderBottomWidth: 10,
  },
  image: {
    flex: 1,
    height: 154,
    width: 120,
    borderRadius: 8,
  },
  //   infoBox: {
  //     flex: 2,
  //     borderRadius: 8,
  //     height: 120,
  //     backgroundColor: "red",
  //   },
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
    flex: 3,
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },
  containerAlt: {
    flexDirection: "row",
    backgroundColor: GlobalColors.DarkBlue,
    height: 120,
    width: 200,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 6,
    marginVertical: 200,
  },
  imageBox: {
    height: 100,
    marginHorizontal: 6,
    borderRadius: 12,
  },
  infoBox: {
    height: 100,
    width: "100%",
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
    overflow: "hidden",
  },
});
