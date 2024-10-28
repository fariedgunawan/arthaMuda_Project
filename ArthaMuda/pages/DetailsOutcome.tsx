import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetailsOutcome() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require("../assets/bg-img.png")} className="min-h-screen">
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View className="header px-[16px] flex flex-row items-center justify-between mt-[30px]">
        <Text className="text-[30px] font-bold text-[#3339B4]">Details Outcome </Text>
        <Feather name="user" size={40} color="#3339B4" />
      </View>
      <ScrollView className="h-[100px]">
        <View className="px-[16px] mt-[5px]">
          <View className="mt-[40px]">
            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/outcome.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Les</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.1.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>
            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>

            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>
            <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
              <View className="flex flex-row items-center">
                <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
                <View className="ml-[20px]">
                  <Text className="text-white font-bold text-[20px]">Bayar Rege rege</Text>
                  <Text className="text-[#FF4343] font-regular mt-[5px]">- Rp.500.000</Text>
                </View>
              </View>
              <View>
                <Text className="text-white">12/02/2024</Text>
                <Text className="text-right text-white">13.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
