import { View, StyleSheet } from "react-native";
import React from "react";

import MoviesData from "../model/MoviesData";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MoviesData />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    height: 100,
    width: "100%",
    backgroundColor: "blue",
  },
});
