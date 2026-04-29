import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Books() {
  return (
    <ThemedView className="flex-1 items-center justify-center  container mx-auto">
      {/* <Stack.Screen
        options={{
          title: "books",
          headerShown: false,
          headerTitleAlign: "center",
        }}
      /> */}
      <ThemedText title={true} className="text-lg font-bold">
        Books
      </ThemedText>
    </ThemedView>
  );
}
