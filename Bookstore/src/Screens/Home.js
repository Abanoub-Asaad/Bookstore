import React from "react";
import { View, StyleSheet } from "react-native";
import BookOverview from "../Components/BookOverview";
import Icon from "../Components/Icon";
const path = "../../assets/";
const BookCovers = {
  firstBook: require(`${path}above-all-else-cover-hires.jpg`),  secondBook: require(`${path}mocktails-hires.jpg`),
  thirdBook: require(`${path}mothers-journey-hires.jpg`),
  fourthBook: require(`${path}alice-greta-reissue-hires.jpg`),
};

const Home = () => {
  return (
    <View style={styles.mainview}>
      <Icon />
      <View style={styles.shelf}>
        <BookOverview imgsrc={BookCovers.firstBook} />
        <BookOverview imgsrc={BookCovers.secondBook} />
        <BookOverview imgsrc={BookCovers.thirdBook} />
        <BookOverview imgsrc={BookCovers.fourthBook} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shelf: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  mainview: {
    marginTop: 40,
  },
});
export default Home;
