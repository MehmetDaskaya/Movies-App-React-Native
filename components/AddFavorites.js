import { View, Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import GlobalColors from "../util/GlobalColors";
import { useDispatch } from "react-redux";
import favoriteAction from "../store/action";

const AddFavorites = ({ onPress, disable }) => {
  return (
    <View>
      <Pressable style={styles.button} disabled={disable} onPress={onPress}>
        <Text style={styles.text}>Add to Favorites</Text>
      </Pressable>
    </View>
  );
};

export default AddFavorites;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#45b6fe",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: "60%",
    marginLeft: "20%",
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
