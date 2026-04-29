import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function DashBoardLayout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: themeColors.navBackground,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: themeColors.iconColorFocused,
        tabBarInactiveTintColor: themeColors.iconColor,
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="books" options={{ title: "Books" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
    </Tabs>
  );
}
