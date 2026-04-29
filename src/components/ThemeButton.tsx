import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

type ThemeButtonPropsType = {
  text: string;
  onPress?: () => void;
};

export default function ThemeButton({ text, onPress }: ThemeButtonPropsType) {
  return (
    <Pressable
      onPress={onPress ?? (() => {})} // 👈 safe default
      className="mt-5"
    >
      {({ pressed }) => (
        <View
          style={{
            backgroundColor: Colors.primary,
            opacity: pressed ? 0.7 : 1,
          }}
          className="px-7 py-4 rounded-xl items-center justify-center"
        >
          <Text className="text-white font-bold text-lg">{text}</Text>
        </View>
      )}
    </Pressable>
  );
}
