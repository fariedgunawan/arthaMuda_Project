import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require("../assets/bg-img.png")} className="min-h-screen">
      <StatusBar backgroundColor="#3339B4" barStyle="light-content" />
      <View className="bg-[#3339B4] px-[16px] pb-[90px] rounded-br-[50px] rounded-bl-[50px]">
        <View className="header flex flex-row items-center justify-between mt-[10px]">
          <Text className="text-[30px] font-bold text-white">Hello User</Text>
          <Feather name="user" size={40} color="white" />
        </View>

        <View className="mt-[50px] px-[20px]">
          <Text className="font-regular text-[20px] text-white">You have</Text>
        </View>

        <View className="saldo flex flex-row justify-between px-[20px] mt-[10px] items-center">
          <Text className="text-[30px] font-bold text-white">Rp.1.500.000</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Text className="font-regular text-white">See Details</Text>
          </TouchableOpacity>
        </View>

        <View className="px-[20px] mt-[10px] ">
          <Text className="text-white">Last update 10.00 12/12/2024</Text>
        </View>
      </View>

      <View className="bar flex justify-center items-center -mt-[50px]">
        <View className="w-[350px] bg-white rounded-[20px] px-[20px] py-[10px] flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("AddIncome")}>
            <View className="flex flex-col items-center gap-2">
              <Image className="w-[40px] h-[40px]" source={require("../assets/income.png")} />
              <Text className="text-[12px] font-bold text-[#3339B4]">Add Income</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddOutcome")}>
            <View className="flex flex-col items-center gap-2">
              <Image className="w-[40px] h-[40px]" source={require("../assets/outcome.png")} />
              <Text className="text-[12px] font-bold text-[#3339B4]">Add Outcome</Text>
            </View>
          </TouchableOpacity>
          <View className="flex flex-col items-center gap-2">
            <Image className="w-[40px] h-[40px]" source={require("../assets/stats.png")} />
            <Text className="text-[12px] font-bold text-[#3339B4]">Stats</Text>
          </View>
        </View>
      </View>

      <View className="px-[16px] mt-[30px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[25px] font-bold text-[#3339B4]">Recent</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Text className="text-[#3339B4] text-[16px]">See more</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-[40px]">
          <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl">
            <View className="flex flex-row items-center">
              <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
              <View className="ml-[20px]">
                <Text className="text-white font-bold text-[20px]">Uang Jajan</Text>
                <Text className="text-[#11FFC6] font-regular mt-[5px]">+ Rp.1.500.000</Text>
              </View>
            </View>
            <View>
              <Text className="text-white">12/02/2024</Text>
              <Text className="text-right text-white">13.00</Text>
            </View>
          </View>

          <View className="card flex flex-row items-center justify-between bg-[#3339B4] px-[20px] py-[20px] rounded-2xl mt-[10px]">
            <View className="flex flex-row items-center">
              <Image className="w-[50px] h-[50px]" source={require("../assets/outcome.png")} />
              <View className="ml-[20px]">
                <Text className="text-white font-bold text-[20px]">Bayar Air</Text>
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
                <Text className="text-white font-bold text-[20px]">Uang Jajan</Text>
                <Text className="text-[#11FFC6] font-regular mt-[5px]">+ Rp.1.500.000</Text>
              </View>
            </View>
            <View>
              <Text className="text-white">12/02/2024</Text>
              <Text className="text-right text-white">13.00</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
