import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function ThemedView({
  style,
  children,
  className,
  ...props
}: {
  style?: any;
  children?: React.ReactNode;
  className?: string;
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
      className={className}
    >
      {children}
    </View>
  );
}
