import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
class ProfilePage extends Component {
  static navigationOptions = {
    tabBar: ({ state }) => ({
      label: "Profile",
      icon: ({ tintColor }) => (
        <Icon
          name="user"
          type="evilicon"
          onPress={() => console.log("hello")}
        />
      ),
      visible: true
    })
  };
  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfilePage;
