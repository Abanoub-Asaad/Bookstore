import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class SignInComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isValidEmail: false,
      isValidPassword: false,
      email: '',
      password: '',
      secureTextEntry: true
    }
  }

  checkEmailValidation(value) {

    this.state.email = value;

    var n = value.length;
    if (n > 4 && value.includes("@")) {
      this.setState({
        isValidEmail: true
      });
    }
    else {
      this.setState({
        isValidEmail: false
      });
    }
  }

  checkPasswordValidation(value) {
    var n = value.length;
    if (n > 5) {
      this.setState({
        isValidPassword: true
      });
    }
    else {
      this.setState({
        isValidPassword: false
      });
    }
  }

  makeSecurePassword() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  signInUser = () => {

    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("HomeStackScreen"))
      .catch(error => alert(error.toString()))
  }

  render() {

    return (

      <View style={styles.container}>
        <View style={styles.header} >
          <ImageBackground style={styles.background}
            source={require("../Screens/Images/SignIn_background2.jpeg")}>
          </ImageBackground>
        </View>

        <Animatable.View style={styles.footer}
          animation="fadeInUpBig" >
          <Text style={styles.textWelcome}> Welcome back </Text>
          <Text style={styles.text_bottom_welcome}> Login to your account </Text>

          <View style={[styles.action, { marginTop: 40 }]}>
            <Feather
              name="mail"
              color="#FF8C00"
              size={20}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChangeText={(text) => this.checkEmailValidation(text)}
            />
            {this.state.isValidEmail ?
              <Animatable.View
                animation="bounceIn"
              >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
          </View>

          <View style={[styles.action, { marginTop: 20 }]}>
            <FontAwesome
              name="lock"
              color="#FF8C00"
              size={20}
            />
            {this.state.secureTextEntry ?
              <TextInput
                placeholder="Password (must be > 5 characters)"
                secureTextEntry={true}
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />
              :
              <TextInput
                placeholder="Password (must be > 5 characters)"
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />}

            <TouchableOpacity
              onPress={() => this.makeSecurePassword()}>
              {this.state.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="gray"
                  size={18}
                />
                :
                <Feather
                  name="eye"
                  color="gray"
                  size={18}
                />
              }
            </TouchableOpacity>

          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button_signIn}
              onPress={() => {
                
                this.checkPasswordValidation(this.state.password)
                console.log(this.state.password)

                this.state.isValidEmail && this.state.password.length > 5 ?
                  this.signInUser()
                  :
                  alert("Check your details again !")
              }
              }>
              <Text style={styles.btnTextSignIn}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastViewInFooter}>
            <Text style={{ color: '#A0A0A0' }}>Don't have an account? </Text>
            <Text style={styles.textSignUp}
              onPress={() => this.props.navigation.navigate("SignUpScreen")}>
              Sign up
            </Text>
          </View>

        </Animatable.View>
      </View>
    );
  }
}


const image_width = Dimensions.get('window').width;
const image_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2
  },
  textWelcome: {
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_bottom_welcome: {
    color: '#A0A0A0',
    fontSize: 15,
    marginTop: 5,
    alignItems: 'center'
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#FF8C00'
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  button_signIn: {
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: image_width - 50,
    height: 50
  },
  btnTextSignIn: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  lastViewInFooter: {
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  textSignUp: {
    color: '#FF8C00',
    fontWeight: 'bold',
  },
});
