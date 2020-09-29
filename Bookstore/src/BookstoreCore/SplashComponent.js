import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require("../Screens/Images/Bookstore_logo.png")}
            style={styles.mainScreen_logoStyle}
            resizeMode={"stretch"}
          />
        </View>

        <Animatable.View style={styles.footer}
          animation="fadeInUpBig" >
          <Text style={styles.title}>JOIN BOOKSTORE TODAY!</Text>
          <Text style={styles.text}>Create an account to start reading</Text>
          <TouchableOpacity style={styles.button_login}>
            <Text style={styles.textSign}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_signup}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}



const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  mainScreen_logoStyle: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: 'gray',
    fontSize: 15,
    marginTop: 5
  },
  button_login: {
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
    width: 300,
    height: 40
  },
  button_signup: {
    borderColor: '#FF8C00',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 5,
    width: 300,
    height: 40
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  }
});
