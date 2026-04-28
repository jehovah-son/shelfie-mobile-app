import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";

export default function ContactPage() {
  return (
    <ThemedView className="flex-1 items-center justify-center  container mx-auto">
      <Stack.Screen options={{ title: "Contact", headerShown: true }} />
      <ThemedText title={true} className="text-lg font-bold">
        Contact
      </ThemedText>
    </ThemedView>
  );
}
