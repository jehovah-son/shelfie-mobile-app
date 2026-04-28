import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Stack } from "expo-router";

export default function AboutPage() {
  return (
    <View className="flex-1 items-center justify-center  container mx-auto">
      <Stack.Screen options={{ title: "About", headerShown: true }} />
      <Text>AboutPage</Text>
      <Link href="/" className="mt-10 text-lg font-bold underline">
        {" "}
        home page
      </Link>
    </View>
  );
}
