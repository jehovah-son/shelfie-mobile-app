import { View, Text, useColorScheme, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/Colors";

export default function ThemeLoader() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;

  return (
    <ActivityIndicator
      size="large"
      color={themeColors.text}
      className=" -translate-x-1/2 -translate-y-1/2"
    />
  );
}
