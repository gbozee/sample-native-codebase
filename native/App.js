import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import { StackNavigator } from "react-navigation";
import { List, ListItem, SocialIcon, Button } from "react-native-elements";
import LoginPage from "./src/LoginPage";
import EmailLoginPage from "./src/EmailLoginPage";
import HomePage from "./src/Home";

const App = StackNavigator({
  Login: { screen: LoginPage },
  EmailLogin: { screen: EmailLoginPage },
  Home: { screen: HomePage }
});
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
