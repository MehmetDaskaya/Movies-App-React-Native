import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import MoviesBox from "../components/movies/MoviesBox";
import DocumentaryMovies from "../components/movies/DocumentaryMovies";
import HorrorMovies from "../components/movies/HorrorMovies";
import ComedyMovies from "../components/movies/ComedyMovies";
import Navbar from "../components/Navbar";
import SplashScreen from "../screens/SplashScreen";
import SearchMovies from "../components/movies/SearchMovies";

const MoviesData = ({ navigation }) => {
  API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=82deb1fcd05b4efc1a500a3def387a13";
  // API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=82deb1fcd05b4efc1a500a3def387a13&query";

  const [movies, setMovies] = useState([]);
  const [isFetching, setIsfetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsfetching(true);
      const response = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(response);
          setMovies(data.results);
          setInterval(() => {
            setIsfetching(false);
          }, 1000);
        });
    }
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        <View>
          <Navbar />
        </View>
        <View style={styles.container}>
          <View>
            <SearchMovies />
          </View>

          <View style={styles.subTitle}>
            <Text style={styles.subTitleText}>Popular Movies</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.movieCarousel}
          >
            {movies.map((movieRequest) => (
              <MoviesBox key={movieRequest.id} {...movieRequest} />
            ))}
          </ScrollView>

          <View style={styles.subTitle}>
            <Text style={styles.subTitleText}>Horror Movies</Text>
          </View>
          <View style={styles.movieCarousel}>
            <HorrorMovies />
          </View>

          <View style={styles.subTitle}>
            <Text style={styles.subTitleText}>Comedy Movies</Text>
          </View>
          <View style={styles.movieCarousel}>
            <ComedyMovies />
          </View>

          <View style={styles.subTitle}>
            <Text style={styles.subTitleText}>Documentaries</Text>
          </View>
          <View style={styles.movieCarousel}>
            <DocumentaryMovies />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoviesData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#223343",
  },
  subTitle: {
    paddingVertical: 10,
  },
  subTitleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBox: {
    fontSize: 16,
    fontWeight: "300",
    padding: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 20,
  },
  movieCarousel: {
    flexDirection: "row",
    backgroundColor: "#5C7FA0",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
