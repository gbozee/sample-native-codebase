import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
class BookingListPage extends Component {
  static navigationOptions = {
    tabBar: ({ state }) => ({
      label: 'Bookings',
      icon: ({ tintColor }) => (
        <Icon
          name="ios-stats-outline"
          type='ionicon'
          onPress={() => console.log('hello')} />
      ),
      visible: true
    }),
  };
  render(){
    return (<View><Text>Booking</Text></View>)
  }
}

export default BookingListPage;
