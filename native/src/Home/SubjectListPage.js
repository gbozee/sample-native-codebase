import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, List, ListItem } from "react-native-elements";
class SubjectListPge extends Component {
  static navigationOptions = {
    header: ({ state, setParams }) => ({
      right: (
        <Icon name="add" type="materialicons" size={30} onPress={() => {}} />
      )
    }),
    tabBar: ({ state }) => ({
      label: "Subjects",
      icon: ({ tintColor }) => (
        <Icon
          name="format-list-bulleted"
          type="materialicons"
          onPress={() => console.log("hello")}
        />
      ),
      visible: true
    })
  };
  render() {
    const list = [
      {
        name: "English Language",
        avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "French Language",
        avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      }
    ];
    return (
      <List containerStyle={{ marginBottom: 0 }}>
        {list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))}
      </List>
    );
  }
}

export default SubjectListPge;
