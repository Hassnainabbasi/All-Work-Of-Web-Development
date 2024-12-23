import { ThemedButtonProps } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function index() {
  return (
    <View style={{ flex : 1,justifyContent : "center" }}>
     <ThemedText type='title' align='center'>Welcome Screen</ThemedText>
     <ThemedButtonProps style={{marginVertical : 20, alignItems : "center", }} onPress={()=> router.push("/(tabs)")} bgColor='green' txt='Go To Home'></ThemedButtonProps>
    </View>
  )
}