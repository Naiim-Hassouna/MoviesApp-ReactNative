import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-end items-center space-y-10 relative">
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />

      <StatusBar style="light" />

      {/* Title and Button */}
      <View className="flex items-center justify-center py-28 max-w-[80%]">
        <View className="bg-black p-4 rounded-3xl">
          <Text className="text-yellow-500 text-4xl font-extrabold tracking-widest my-4">
            MP
          </Text>
        </View>
        <Text className="text-yellow-500 text-4xl font-bold tracking-widest my-4">
          Movie Paradise 
        </Text>
        <View style={{ height: 15 }} />
        <Text className="text-white tracking-widest mb-2 text-lg text-center font-medium">
          Watch and find movies that resonate your silent symmphony.
        </Text>
      </View>

      <View className="my-4 mb-36">
        <TouchableOpacity
          className="px-12 py-3 rounded-lg bg-black"
          onPress={() => navigation.navigate("HomeTab")}
        >
          <Text className="text-yellow-500 text-lg font-medium">Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
