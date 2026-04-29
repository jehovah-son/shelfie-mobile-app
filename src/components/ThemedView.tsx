import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemedView({
  style,
  children,
  className,
  safe = false,
  ...props
}: {
  style?: any;
  children?: React.ReactNode;
  className?: string;
  safe?: boolean;
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  if (!safe)
    return (
      <View
        style={[{ backgroundColor: theme.background }, style]}
        {...props}
        className={className}
      >
        {children}
      </View>
    );
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
      className={className}
    >
      {children}
    </SafeAreaView>
  );
}
