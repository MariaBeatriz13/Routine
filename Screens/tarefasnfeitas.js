import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class TarefasNaoFeitas extends Component {
  render() {
    return <View style = {styles.conteiner}>TarefasNãoFeitas</View>;
  }
}

const styles = StyleSheet.create({
 conteiner:{
    backgroundColor:"#F08080",
    flex: 1
 }


});
