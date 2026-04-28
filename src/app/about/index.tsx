import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function AboutPage() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <View
      className="flex-1 items-center justify-center  container mx-auto"
      style={{ backgroundColor: themeColors.background }}
    >
      <Stack.Screen options={{ title: "About", headerShown: true }} />
      <View className="">
        <Text
          className="text-lg font-bold"
          style={{ color: themeColors.title }}
        >
          AboutPage
        </Text>
        <Link href="/" className="mt-10 text-lg font-bold underline">
          {" "}
          home page
        </Link>
      </View>
    </View>
  );
}
