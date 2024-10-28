import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import Register from "./Register";

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ImageBackground source={require("../assets/bg-img.png")} className="min-h-screen">
        <StatusBar backgroundColor="#FFE5F8" barStyle="dark-content" />
        <View className="container flex justify-center items-center min-h-screen">
          <Text className="font-semibold text-[35px] text-[#3339B4]">Welcome</Text>
          <Image source={require("../assets/logo.png")} className="w-[150px] h-[150px] mt-[40px]" />
          <Text className="font-semibold text-[20px] mt-[20px] text-[#3339B4]">ArthaMuda</Text>
          <View className="flex flex-row items-center bg-transparent px-[10px] rounded-2xl mt-[30px] border-2 border-[#3339B4]">
            <FontAwesome5 name="user-alt" size={20} color="#3339B4" />
            <TextInput placeholder="Username..." placeholderTextColor="#3339B4" className="bg-transparent rounded-xl w-[200px] h-[40px] px-[10px]" />
          </View>
          <View className="flex flex-row items-center bg-transparent px-[10px] rounded-2xl mt-[20px] border-2 border-[#3339B4]">
            <FontAwesome6 name="unlock-keyhole" size={20} color="#3339B4" />
            <TextInput placeholder="Password..." placeholderTextColor="#3339B4" secureTextEntry={true} className="bg-transparent rounded-xl w-[200px] h-[40px] px-[10px]" />
          </View>

          <TouchableOpacity className="mt-[20px]" onPress={() => navigation.navigate("Dashboard")}>
            <Text className="bg-[#3339B4] py-[10px] text-center text-white font-semibold rounded-2xl w-[240px]">Login</Text>
          </TouchableOpacity>

          <View className="flex flex-row items-center mt-[7px]">
            <Text className="text-[#3339B4] font-light">Dont have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="ml-[5px] font-bold text-[#3339B4]">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
