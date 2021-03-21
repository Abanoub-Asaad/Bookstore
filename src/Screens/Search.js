import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import SearchBar from "../Components/SearchBar";
const Search = () => {
  return (
    <View style={{ marginTop: 20 }}>

      <SearchBar />

      <Image
        source={require("../Screens/Images/book_icon.png")}
        style={styles.logoStyle}
        resizeMode={"stretch"}
      />

    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  logoStyle: {
    width: height_logo,
    height: height_logo,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 150
}})

export default Search;


