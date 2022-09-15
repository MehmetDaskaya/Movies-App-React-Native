import {
  View,
  Text,
  Button
} from "react-native";
import React from "react";
import {
  useDispatch
} from "react-redux";
import favoriteAction from "../store/action";



const AddFavorites = ({onPress, disable}) => {

  return ( <
    View >
    <
    Button
    disabled={disable}
    onPress = {
     onPress
    }
    title = "Add to favorites" / >
    </View>
  );
};

export default AddFavorites;