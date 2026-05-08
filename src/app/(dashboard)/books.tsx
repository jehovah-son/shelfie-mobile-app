import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import React from "react";
import ThemedCard from "@/components/ThemeCard";
import { Colors } from "../../../constants/Colors";
import { useBooks } from "../../../hooks/useBooks";
import { FlatList, Pressable } from "react-native";

export default function Books() {
  const { books, fetchBooks } = useBooks();

  return (
    <ThemedView safe={true} className="flex-1 items-center  container mx-auto">
      {/* <Stack.Screen
        options={{
          title: "books",
          headerShown: false,
          headerTitleAlign: "center",
        }}
      /> */}
      <ThemedText title={true} className="text-lg font-bold">
        Your Reading List
      </ThemedText>
      <FlatList
        className="mt-10"
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={``}
        renderItem={({ item }) => (
          <Pressable>
            <ThemedCard>
              <ThemedText className="font-bold text-lg ">
                {item.title}
              </ThemedText>
              <ThemedText>written by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
}
