import { ThemedButtonProps } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function index() {
  return (
    <View style={{flex : 1, justifyContent : "center"}}>
     <ThemedText type='title' align='center' style={{alignSelf : "center"}}>Welcome Screen</ThemedText>
     <ThemedButtonProps onPress={()=> router.push("/working")} bgColor='green' txt='Go To Fun'></ThemedButtonProps>
    </View>
  )
}