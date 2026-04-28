import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ContactPage() {
  return (
    <View className="flex-1 items-center justify-center  container mx-auto">
      <Text>Contact</Text>
      <Link href="/" className="mt-10 text-lg font-bold underline">
        {" "}
        home page
      </Link>
    </View>
  );
}
