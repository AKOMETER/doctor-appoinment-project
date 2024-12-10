import {
  View,
  useWindowDimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import DeliveryBoyIcon from "@/assets/images/DeliveryBoyIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

const HeadBanner = () => {
  const { width, height } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <SafeAreaView
      className="bg-[#5151ff] rounded-b-3xl"
      style={{
        width,
        height: height / 1.9,
      }}
    >
      <View className="px-5 py-2 flex flex-row justify-between items-center w-full">
        <TouchableOpacity className="bg-white/20 p-2 rounded-full">
          <MaterialIcons name="qr-code-scanner" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            width={40}
            height={40}
            className="rounded-full"
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col items-center justify-center px-10 w-full">
        {/* <DeliveryBoyIcon width={200} height={180} /> */}
        <Text className="text-4xl text-white font-semibold">
          Book Your Next Doctor Appointment
        </Text>
        <Text className="text-slate-300 font-medium text-center mt-3">
          Book Now and get 30% off
        </Text>

        <KeyboardAvoidingView
          style={{
            width: "100%",
          }}
        >
          <View className="relative flex flex-row items-center">
            <View className="absolute pt-4 pl-3">
              <FontAwesome5 name="search" size={20} color="white" />
            </View>
            <TextInput
              placeholder="Find your suitable doctor"
              placeholderTextColor={"#fff"}
              className="bg-white/20 w-full mt-5 p-3 rounded-lg text-white pl-12"
              style={{
                fontSize: 20,
                width: "100%",
              }}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity
            onPress={handleSearch}
            className=""
          >
            {/* <Text className="text-white text-center text-lg">Search</Text> */}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default HeadBanner;
