import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


const imagesArr = [
    "https://images.unsplash.com/photo-1728137264593-257cfa1c5b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732901812656-1e3c79d414f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1439871846984-851e435a999b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1732587032289-8fbf556482c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1688072514847-73bacc343aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1641804155472-95923918dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
]

export default function ImageGallery(){

    const [image, setImage] = useState(imagesArr); 
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setImage([result.assets[0].uri, ...image]);  // Corrected state update
        }
      };
    const pickImageFromCamera = async () => {
       let permission = await ImagePicker.requestCameraPermissionsAsync()
       if(permission.granted){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.canceled) {
            setImage([result.assets[0].uri, ...image]); 
          }
       }
      };
    
    return(
        <ThemedView style={{flex : 1}}>
            <ThemedView style={styles.info}>
            <Entypo onPress={pickImage} name="images" size={24} color="black" style={{backgroundColor : "#E2E6E4", padding : 12, borderRadius : 125}}/>
            <Entypo onPress={pickImageFromCamera} name="camera" size={24} color="black" style={{backgroundColor : "#E2E6E4", padding : 12, borderRadius : 125}}/>
             </ThemedView>
             <FlatList 
             data={image}
             keyExtractor={(data)=>data}
             renderItem={({item}) => {
            return(
            <Image 
            source={{uri : item}}
            style={{flex : 1, aspectRatio : 2/1, marginVertical : 2}}
            />
            )
             }}
             /> 
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    info : {
        padding : 20,
        position : "absolute",
        right : -1,
        backgroundColor : "transparent",
        zIndex : 10,
        flexDirection : "column",
        gap: 20,}
})