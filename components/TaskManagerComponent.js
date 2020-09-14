import React, { Component } from 'react';
import {  
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput  } from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, marginTop: Platform.OS === "ios"? 34 : 0}}>
        <AddContainer></AddContainer>
        <TaskListContainer></TaskListContainer>
      </View>
    );
  }
}
