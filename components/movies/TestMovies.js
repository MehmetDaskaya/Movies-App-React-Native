import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import MoviesBox from "./MoviesBox";

const TestMovies = ({ style }) => {
  const API_TRENDING =
    "https://api.themoviedb.org/3/trending/all/week?api_key=82deb1fcd05b4efc1a500a3def387a13";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_TRENDING)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.try}
    >
      {movies.map((movieRequest) => (
        <MoviesBox key={movieRequest.id} {...movieRequest} />
      ))}
    </ScrollView>
  );
};

export default TestMovies;

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
  try: {
    flexDirection: "row",
  },
});

// import { View, Text, Image } from 'react-native'
// import React,{useState, useEffect} from 'react'

// const TestMovies = ({title, poster_path, vote_average, overview, release_date, id, props}) => {

//   const API_IMG = "https://image.tmdb.org/t/p/w500";
//   const IMG_URL = API_IMG+poster_path;

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//     .then((response) => response.json())
//     .then(data => {
//       console.log(data);
//       setMovies(data.results);

//     })
//   }, []);

//   return (
//      <>
//         {movies.map((movieRequest) =>(
//             <View>
//                 <Image
//                 source={{uri:IMG_URL}}
//                 key={movieRequest.id} {...movieRequest}
//                   />
//             </View>
//         ))}
//      </>
//   )
// }

// export default TestMovies;
