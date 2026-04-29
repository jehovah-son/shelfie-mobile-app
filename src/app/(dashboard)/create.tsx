import React from "react";
import { Link, Stack } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";

export default function CreateBooks() {
  return (
    <ThemedView className="flex-1 items-center justify-center  container mx-auto">
      {/* <Stack.Screen
        options={{
          title: "create",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      /> */}
      <ThemedText title={true} className="text-lg font-bold">
        Add New Books
      </ThemedText>
    </ThemedView>
  );
}
