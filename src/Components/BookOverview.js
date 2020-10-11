import { useNavigation } from "@react-navigation/native";
import React ,{useState}from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEIGHT = 300, WIDTH = 200;
const screen_width = Dimensions.get('window').width;
const BookOverview = (props) => {
  const [bookimgsrc,usebookimgsrc]=useState(" ")
  const [bookauthor,usebookauthor]=useState(" ")
  const [bookdescription,usebookdescription]=useState(" ")
  const nav = useNavigation()
  function getBook(bookisbn){
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookisbn}&format=json&jscmd=data`)
    .then(
      (res)=>{
        return res.json()
      })
      .then(
        (resjson)=>{
      usebookauthor(Object.values(resjson)[0].authors[0].name)
      usebookimgsrc(Object.values(resjson)[0].cover.large)
      usebookdescription(Object.values(resjson)[0].excerpts[0].text)
        })
      .catch(
        function (err){
          console.log(err)
        }
      )
    }
  getBook(props.bookisbn)
  return (
    <TouchableOpacity style={styles.Main_View} onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }}>
      <Image source={{uri:bookimgsrc}} style={styles.Coverimg} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  Main_View: {
    width: screen_width/2-8,
    marginTop: 5,
    marginLeft: 5,
    height: HEIGHT,
  },

  Coverimg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
  },
});
export default BookOverview;
