import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
class DashboardPage extends Component {
  static navigationOptions = {
    title: "Dashboard",
    tabBar: ({ state }) => ({
      label: "Dashboard",
      icon: ({ tintColor }) => (
        <Icon
          name="dashboard"
          type="font-awesome"
          onPress={() => console.log("hello")}
        />
      ),
      visible: true
    })
  };
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

export default DashboardPage;
