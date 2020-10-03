import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const Bookmark = () => {
  return (
    <LinearGradient
    colors={['#FF8C00','#FF8C00']}
    style={{ height: "20%" }}
>
     <View style={{ flexDirection: 'row', marginTop: 70, marginBottom: 20 }}>
        <View style={styles.divider} />
        <View style={styles.title}>
            <Text style={{ fontSize: 38, color: "#2D3436" }}> Book <Text style={{ fontWeight: "300", color: "white" }}>Mark</Text></Text>
        </View>
        <View style={styles.divider} />
    </View>
</LinearGradient>
  );
};
const styles = StyleSheet.create({
  divider: {
      backgroundColor: "#2D3436",
      height: 1,
      flex: 1,
      alignSelf: 'center'
  },
  title: {
      flexDirection: "row",
      fontWeight: "800",
      color: "#2D3436",
      paddingHorizontal: 30
  }
})
export default Bookmark;
