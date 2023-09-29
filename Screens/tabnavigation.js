import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import TarefasNaoFeitas from "./tarefasnfeitas";
import TarefasFeitas from "./tarefasfeitas";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={
        [styles.bottomTabStyle,{backgroundColor:route.name === "Tarefas Não Feitas"? "lightcoral":"lightgreen"}]
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Tarefas Não Feitas") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Tarefas Feitas") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="Tarefas Não Feitas"
          component={TarefasNaoFeitas}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Tarefas Feitas"
          component={TarefasFeitas}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "transparent",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});