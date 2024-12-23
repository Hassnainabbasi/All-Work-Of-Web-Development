import React from 'react'
import { View } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Entypo from '@expo/vector-icons/Entypo';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function bykea() {
    
  const SCREEN_HEIGHT = Dimensions.get('screen').height
  const SCREEN_WIDTH = Dimensions.get('screen').width
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Text style={[styles.headertext , styles.headeritemcolor]}>Bykea</Text>
          <Entypo style={styles.headeritemcolor} name="menu" size={24} color="black" />
          </View>
          <View style={[styles.banner,{height : SCREEN_HEIGHT/3.7}]}>
           <Image style={styles.bannerImg} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s"}}/>
          </View> 
           <View style={[styles.infobarinput ,{height : SCREEN_HEIGHT/10}]}>
          <Feather name="message-circle" size={24} color="#0DC115" />
          <MaterialIcons name="notifications-active" size={24} color="#0DC115" />
          </View>
          <View style={styles.info}>
            <View style={styles.boxone}>
              <View style={[styles.boxones,{backgroundColor : "#B6EFBF"}]}><FontAwesome name="automobile" size={40} color="black" /></View>
              <View style={[styles.boxones,{backgroundColor : "#A3ECD9"}]}><FontAwesome6 name="motorcycle" size={40} color="black" /></View>
            </View>
            <View style={styles.boxone}>
            <View style={[styles.boxones,{backgroundColor : "#B6EFBF"}]}><MaterialIcons name="storefront" size={40} color="black" /></View>
            <View style={[styles.boxones,{backgroundColor : "#A3ECD9"}]}><FontAwesome5 name="mobile" size={40} color="black" /></View>
            </View>
            <View style={styles.boxone}>
            <View style={[styles.boxones,{backgroundColor : "#B6EFBF"}]}><Ionicons name="cash" size={40} color="black" /></View>
            <View style={[styles.boxones,{backgroundColor : "#A3ECD9"}]}><Ionicons name="time" size={40} color="black" /></View>
            </View>
          </View>
         </View>
      );
}

const styles = StyleSheet.create({
    container : {
      flex : 1
    },
    header : {
      height: 50,
      alignItems: "center",
      flexDirection : "row",
      justifyContent : "space-between", 
     paddingHorizontal : 16,
    },
    headertext : {
      fontFamily: 'monospace',
      //  tahoma, verdana, arial, sans-serif;
        fontWeight : 'bold',
        fontSize : 30,
      },
      headeritemcolor : {
      color : "#0DC115"
      },
    bannerImg : {
      height : "90%",
      width : "100%",
     resizeMode : "cover"  ,
     borderRadius: 7,
        marginTop: 10,
       
    },
    banner: {
    padding : 20,
    paddingHorizontal : 20,
    paddingTop : 12
    },
    
    infobarinput : {
      flexDirection : "row",
      justifyContent : "space-evenly",
      alignItems : "center",
      marginHorizontal : 20,
      borderRadius : 10, 
      borderWidth : 10,
      borderColor : "white",
      backgroundColor : "white",
      shadowColor: "rgba(0, 0, 0, 0.1)", // Light gray shadow color
      shadowOffset: { width: 0, height: 2 },  // Vertical offset for shadow
      shadowRadius: 4,                // How blurry the shadow is
      shadowOpacity: 3,  
    },
    info : {
      flex : 1,
     margin : 20,
     gap : 20
    },
    boxone : {
      gap : 20,
     flex : 1,
     borderRadius : 20,
     flexDirection : "row"
    },
    boxones : {
    flex : 1,
    borderRadius : 15,
    justifyContent : "center",
    alignItems : "center"
    }
    })