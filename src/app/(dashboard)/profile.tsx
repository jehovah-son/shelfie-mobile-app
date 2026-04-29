import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Link, Stack } from "expo-router";
import React from "react";

export default function Profile() {
  return (
    <ThemedView className="flex-1 items-center justify-center  container mx-auto">
      {/* <Stack.Screen
        options={{
          title: "Profile",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      /> */}
      <ThemedText title={true} className="text-lg font-bold">
        Profile
      </ThemedText>

      <ThemedText className="text-lg font-bold">
        Time to start reading some books......
      </ThemedText>
    </ThemedView>
  );
}
