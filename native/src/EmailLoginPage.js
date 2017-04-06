import React from "react";
import {
  StyleSheet,
  Text,
  ListView,
  StatusBar,
  View,
  Navigator,
  Image,
  ScrollView
} from "react-native";

import {
  List,
  ListItem,
  SocialIcon,
  Icon,
  Button
} from "react-native-elements";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import NavigationBar from "react-native-navbar";

class EmailLoginPage extends React.Component {
  static navigationOptions = {
    header: (navigtion, defaultHeader) => ({
      ...defaultHeader,
      tintColor: "#fff",
      style: {
        backgroundColor: "#4c76af",
        borderWidth: 0,
        shadowRadius: 0,
        shadowColor: "transparent",
        shadowOpacity: 1,
        shadowOffset: {
          height: 0
        }
      }
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.nav}
          leftButton={<Icon name="arrow-back" iconStyle={styles.navIcon} />}
          rightButton={<Text style={styles.navRight}>Forgot Passwod</Text>}
        />
        <View style={styles.body}>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 30,
              color: "#fff",
              marginTop: 20,
              marginBottom: 50
            }}
          >
            Log In
          </Text>
          <View style={{}}>

            <FormLabel labelStyle={styles.formLabel}>Email Address</FormLabel>
            <FormInput containerStyle={styles.formInput} />
            <FormValidationMessage>Invalid Email</FormValidationMessage>

            <FormLabel labelStyle={styles.formLabel}>Password</FormLabel>
            <FormInput />
            <FormValidationMessage>Invalid Email</FormValidationMessage>
          </View>
          <Button
            title="SUBMIT"
            large
            icon={{ name: "check" }}
            buttonStyle={{
              marginTop: 10,
              backgroundColor: "#30aaf0"
            }}
          />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4c76af",
    flex: 1
    // justifyContent: "center"
  },
  formLabel: {
    color: "#fff"
  },
  formInput: {
    borderColor: "#fff"
  },
  navRight: {
    color: "#fff",
    paddingTop: 10,
    paddingRight: 10
  },
  nav: {
    backgroundColor: "#4c76af",
    color: "#fff",
    paddingLeft: 10
  },
  navIcon: {
    paddingTop: 5,
    color: "#fff",
    fontSize: 50
  },
  body: {
    flex: 1
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
export default EmailLoginPage;
