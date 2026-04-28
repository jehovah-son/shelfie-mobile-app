import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: themeColors.navBackground },
          headerTintColor: themeColors.text,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
    // <Stack/>
  );
}
