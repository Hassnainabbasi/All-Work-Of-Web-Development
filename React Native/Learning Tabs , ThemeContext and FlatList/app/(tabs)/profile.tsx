import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <ThemedText type="title" align="center">
        Profile Page
      </ThemedText>
    </View>
  );
}