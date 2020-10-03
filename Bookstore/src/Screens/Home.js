import React, { createContext, useContext } from "react";
import { View, StyleSheet } from "react-native";
import BookOverview from "../Components/BookOverview";
import Icon from "../Components/Icon";

const path = "../../assets/";
const BookCovers = {
  firstBook: { path: require(`${path}above-all-else-cover-hires.jpg`), title: "above all else" },
  secondBook: { path: require(`${path}alice-greta-reissue-hires.jpg`), title: "alice greta reissue" },
  thirdBook: { path: require(`${path}mocktails-hires.jpg`), title: "mocktails" },
  fourthBook: { path: require(`${path}mothers-journey-hires.jpg`), title: "mothers journey" }
};
const context = createContext(BookCovers)
const Home = () => {
  const value = useContext(context)

  return (
    <View style={styles.mainview}>

      <Icon />
      <View style={styles.shelf}>
        <BookOverview imgsrc={BookCovers.firstBook.path} title={BookCovers.firstBook.title} />
        <BookOverview imgsrc={BookCovers.secondBook.path} title={BookCovers.secondBook.title} />
        <BookOverview imgsrc={BookCovers.thirdBook.path} title={BookCovers.thirdBook.title} />
        <BookOverview imgsrc={BookCovers.fourthBook.path} title={BookCovers.fourthBook.title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shelf: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  mainview: {
    marginTop: 40,
  },
});
export default Home;