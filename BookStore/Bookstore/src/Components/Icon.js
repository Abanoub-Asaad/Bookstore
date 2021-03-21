import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Icon = () => {
  return (
    <View style={styles.Icon}>
    <AntDesign name="book" size={24} color='black'/>
      <Text >icon test</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  Icon: {
    marginLeft: 10,
    flexDirection:'row'
  },
});
export default Icon;
