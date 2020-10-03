import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import BookOverview from "../Componants/BookOverview";
import Swiper from 'react-native-swiper';
import Icon from "../Componants/Icon";
import {Entypo, FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';


const path = "../../assets/";
const BookCovers = {
  firstBook: { path: require(`${path}above-all-else-cover-hires.jpg`), title: "above all else" },
  secondBook: { path: require(`${path}alice-greta-reissue-hires.jpg`), title: "alice greta reissue" },
  thirdBook: { path: require(`${path}mocktails-hires.jpg`), title: "mocktails" },
  fourthBook: { path: require(`${path}mothers-journey-hires.jpg`), title: "mothers journey" }
};

const Home = () => {
  return (
    <View style={styles.mainview}>
      <LinearGradient
                colors={['#FF8C00', '#FF8C00']}
                style={{ height: "10%" }}
            >
            </LinearGradient>

      <ScrollView style={styles.container}>

        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor='#FF8C00'>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>


        <View style={styles.categoryContainer}>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <FontAwesome name="bookmark" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Saved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="readme" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Entypo name="star" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Favourite</Text>
          </TouchableOpacity>

        </View>

        <Text style={{ fontSize: 30, marginLeft: 95, fontWeight: 'bold', marginBottom: 20, color: '#FF8C00', marginTop: 10 }}>Recently Viewed</Text>
       
        <View style={styles.shelf}>
          <BookOverview imgsrc={BookCovers.firstBook.path} title={BookCovers.firstBook.title} />
          <BookOverview imgsrc={BookCovers.secondBook.path} title={BookCovers.secondBook.title} />
          <BookOverview imgsrc={BookCovers.thirdBook.path} title={BookCovers.thirdBook.title} />
          <BookOverview imgsrc={BookCovers.fourthBook.path} title={BookCovers.fourthBook.title} />
        </View>
      </ScrollView>
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
    marginTop: 0,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 30
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,

  },
  categoryBtn: {
    flex: 1,
    marginHorizontal: 0,
    alignSelf: 'center',
    marginLeft: 7
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,

    borderRadius: 50,
    marginRight: 70
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#FF8C00',
    marginRight: 65
  }
});
export default Home;
