import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";

export default function AboutPage() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <ThemedView className="flex-1 items-center justify-center  container mx-auto">
      <Stack.Screen options={{ title: "About", headerShown: true }} />
      <View>
        <ThemedText title={true} className="text-lg font-bold">
          AboutPage
        </ThemedText>
      </View>
    </ThemedView>
  );
}
