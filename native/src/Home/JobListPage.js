import React, { Component } from "react";
import { View, Text, StyleSheet,
ListView } from "react-native";
import { Icon, Button } from "react-native-elements";
class JobListPage extends Component {
  static navigationOptions = {
    tabBar: ({ state }) => ({
      label: 'Jobs',
      icon: ({ tintColor }) => (
        <Icon
          name="ios-search"
          type='ionicon'
          onPress={() => console.log('hello')} />
      ),
      visible: true
    }),
  };
  
  render(){
    return (<View><Text>Job</Text></View>)
  }
}

export default JobListPage;
