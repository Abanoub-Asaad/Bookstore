import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from '../Screens/Home'
import BookCovers from '../Screens/Home'
import LikeButton from '../Components/LikeButton';
const HEIGHT = 250,WIDTH = 150;
const BookDetails = ({route,navigation}) => {
    const imgsrc=route.params.imgsrc
    const title=route.params.title
    return(
       /* <View style={styles.Main_View}>
            <View style={[{marginLeft:5},{marginTop:5}]}>
             </View>
            </View>*/
            
            <View>
                
                
                <View style={styles.top}>
                <Image source={imgsrc} style={styles.Coverimg}/>
                <View style={styles.btn}>
                <LikeButton />      
                </View>
                          </View>
                
                <View style={styles.bot}>

                <View style={styles.textview}> 
                    <Text style={styles.header}>{title}</Text>
                    <Text style={styles.normaltext}>By:dummy name</Text>
                    <Text style={styles.header}>Description</Text>
                    <Text style={styles.normaltext}>Lorem Ipsum is
                     simply dummy text of the printing and typese
                     tting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book</Text>
                </View>
                </View>
            </View>

    )
};

const styles = StyleSheet.create({

    top:{
        height:"40%",
        width:"100%",
    },
    bot:{
        height:"70%",
        width:"100%",
    },
    
      Coverimg: {
          width:"100%",
          height:"100%",
          resizeMode:'cover'        
      },
      
    textview:{
        marginTop:10,
        marginLeft:10,


    },
      header:{
          fontWeight:'bold',
          fontSize:24,
          marginLeft:7,
          color:"black",

      },
      normaltext:{
        fontSize:15,
        marginLeft:7,
        marginTop:5,
        color:"black",
    },
    btn:{
        position:'absolute',
        marginTop:324,
        marginLeft:320,
        
    }
});
export default BookDetails;
