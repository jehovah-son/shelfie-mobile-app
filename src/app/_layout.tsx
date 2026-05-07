import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../../context/userContext";
import { BookProvider } from "../../context/bookContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <UserProvider>
      <BookProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: themeColors.navBackground },
            headerTintColor: themeColors.text,
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
      </BookProvider>
    </UserProvider>
    // <Stack/>
  );
}
