import React from "react";
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
  ScrollView
} from "react-native";
import { List, ListItem, SocialIcon, Button } from "react-native-elements";

class LoginPage extends React.Component {
  static navigationOptions = {
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      visible: false,
    }),
  }
  render() {
    return (
      <View style={loginStyles.container}>
        <Text style={loginStyles.loginHeader}>
          Welcome to Tuteria
        </Text>
        <View style={loginStyles.buttonContainer}>
          <Button
            title="Login With Email"
            buttonStyle={loginStyles.loginButton}
            textStyle={loginStyles.loginButtonTextStyle}
          />
          <SocialIcon title="Login With Facebook" button type="facebook" />
          <SocialIcon
            title="Login With Google"
            style={loginStyles.googleButton}
            button
            type="google"
          />
        </View>

      </View>
    );
  }
}
const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: "#4c76af",
    flex: 1,
    justifyContent: "space-around"
  },
  loginHeader: {
    fontSize: 25,
    marginBottom: -200,
    flex: 0,
    flexShrink: 1,
    // marginTop: 20,
    color: "#fff",
    textAlign: "center"
  },
  buttonContainer: {},
  loginButton: {
    borderRadius: 25,
    marginBottom: 5,
    backgroundColor: "#30aaf0"
  },
  loginButtonTextStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },
  googleButton: {
    backgroundColor: "red"
  }
});
export default LoginPage;
