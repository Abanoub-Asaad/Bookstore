import React, { useState } from "react";
import { StyleSheet  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
const LikeButton = () => {
    const [pressed,usepressed]=useState(true)

  return (
    <TouchableOpacity style={styles.btn} onPress={()=>{
        (pressed)?usepressed(false):usepressed(true)
    }}>
        {(pressed)?
        <AntDesign name="hearto" style={styles.heart} />
    :    

        <AntDesign name="heart" style={styles.heart} />
    }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn:{
      borderRadius:500,
      width:70,
      height:70,
      backgroundColor:'#FF8C00',
  },
  heart:{
      fontSize:40,
      color:'white',
    alignSelf:'center',
    marginTop:15,
  }
});
export default LikeButton;
