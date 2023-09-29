import React,{Component} from "react";
import { View, StyleSheet} from "react-native";


export default class TarefasFeitas extends Component{
    render(){
        return(
     <View style = {styles.conteiner}>
        TarefasFeitas
     </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner:{
       backgroundColor:"#90EE90",
       flex: 1
    }
   
   
   });