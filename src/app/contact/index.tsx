import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function ContactPage() {
  return (
    <View className="flex-1 items-center justify-center  container mx-auto">
      <Stack.Screen options={{ title: "Contact", headerShown: true }} />
      <Text>Contact</Text>
      <Link href="/" className="mt-10 text-lg font-bold underline">
        {" "}
        home page
      </Link>
    </View>
  );
}
