import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
      {/* person tabs */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={
                focused ? themeColors.iconColorFocused : themeColors.iconColor
              }
            />
          ),
        }}
      />
      {/* books tab */}
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "book" : "book-outline"}
              color={
                focused ? themeColors.iconColorFocused : themeColors.iconColor
              }
            />
          ),
        }}
      />
      {/* create tab */}
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "create" : "create-outline"}
              color={
                focused ? themeColors.iconColorFocused : themeColors.iconColor
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
