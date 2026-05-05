import { View, Text, useColorScheme, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/Colors";
import ThemedView from "./ThemedView";

export default function ThemeLoader() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;

  return (
    <ThemedView className="flex-1 justify-center items-center ">
      <ActivityIndicator
        size="large"
        color={themeColors.text}
        className=" -translate-x-1/2 -translate-y-1/2"
      />
    </ThemedView>
  );
}
