import { TextInput, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function ThemeTextInput({ style, ...props }: any) {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <TextInput
      style={[
        {
          backgroundColor: themeColors.uiBackground,
          color: themeColors.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
}
