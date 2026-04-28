import { Text, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function ThemedText({
  style,
  children,
  className,
  title = false,
  ...props
}: {
  style?: any;
  children?: React.ReactNode;
  className?: string;
  title?: boolean;
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;

  return (
    <Text
      style={[{ color: textColor }, style]}
      {...props}
      className={className}
    >
      {children}
    </Text>
  );
}
