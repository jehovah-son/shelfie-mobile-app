import React from 'react';
import { Text, View,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 bg-slate-100">
      <StatusBar style="dark" />
      
      <View className="flex-1 items-center justify-center p-6">
        {/* Test Card */}
        <View className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 w-full max-w-sm">
          
          <View className="bg-blue-500 w-16 h-16 rounded-2xl items-center justify-center mb-4 shadow-lg shadow-blue-300">
            <Text className="text-white text-3xl font-bold">G</Text>
          </View>

          <Text className="text-slate-900 text-3xl font-extrabold tracking-tight">
            Grocify
          </Text>
          
          <Text className="text-slate-500 text-lg mt-2 font-medium">
            Tailwind is <Text className="text-green-600 font-bold">Active</Text>
          </Text>

          <View className="mt-6 py-3 bg-slate-900 rounded-xl items-center">
            <Text className="text-white font-semibold">Ready to Build</Text>
          </View>

        </View>
      </View>
    </View>
  );
}