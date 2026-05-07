import React from "react";
import { Link, Stack } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Keyboard, TouchableWithoutFeedback, Text } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import ThemeTextInput from "@/components/ThemeTextInput";
import ThemeButton from "@/components/ThemeButton";

export default function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return;

    setLoading(true);

    await createBook({ title, author, description });
    setTitle("");
    setDescription("");
    setAuthor("");
    router.replace("/books");
    // replace the current screen with the books list, so that user can't go back to the create screen with the back button
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView className="flex-1 items-center justify-center  container mx-auto">
        {/* <Stack.Screen
        options={{
          title: "create",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      /> */}
        <ThemedText title={true} className="text-lg font-bold">
          Add New Books
        </ThemedText>
        <ThemeTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <ThemeTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <ThemeTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <ThemeButton
          onPress={handleSubmit}
          disabled={loading}
          text={loading ? "Saving..." : "Create Book"}
        />
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
