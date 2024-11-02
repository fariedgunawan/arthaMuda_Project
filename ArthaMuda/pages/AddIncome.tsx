import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AddIncome() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require("../assets/bg-img.png")} className="min-h-screen">
      <StatusBar backgroundColor="#3339B4" barStyle="light-content" />
      <View className="bg-[#3339B4] px-[16px] pb-[30px] rounded-br-[50px] rounded-bl-[50px]">
        <View className="header flex flex-row items-center justify-between mt-[30px]">
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <Text className="text-[30px] font-bold text-white">Add Income</Text>
          <Feather name="user" size={40} color="white" />
        </View>

        <View className="flex flex-col gap-[25px] px-[20px] mt-[10px]">
          <View className="flex flex-row items-center border-b-[2px] border-b-white pb-2">
            <Text className="text-white font-medium text-[18px] mr-2">Title :</Text>
            <TextInput placeholder="Input Income Title" placeholderTextColor={"grey"} className="text-white text-[18px]"></TextInput>
          </View>

          <View className="flex flex-row items-center border-b-[2px] border-b-white pb-2">
            <Text className="text-white font-medium text-[18px] mr-2">Rp. :</Text>
            <TextInput placeholder="Input Income" placeholderTextColor={"grey"} className="text-white text-[18px]"></TextInput>
          </View>

          <View className="flex flex-row items-center border-b-[2px] border-b-white pb-2">
            <Text className="text-white font-medium text-[18px] mr-2">Date :</Text>
            <TextInput placeholder="Input Date" placeholderTextColor={"grey"} className="text-white text-[18px]"></TextInput>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-white font-light text-[24px] mt-[25px] text-right px-[20px]">Add +</Text>
        </TouchableOpacity>
      </View>

      <View className="px-[16px] mt-[30px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[25px] font-bold text-[#3339B4]">Last Income</Text>
          <TouchableOpacity onPress={() => navigation.navigate("DetailsIncome")}>
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
              <Image className="w-[50px] h-[50px]" source={require("../assets/income.png")} />
              <View className="ml-[20px]">
                <Text className="text-white font-bold text-[20px]">Gajian</Text>
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
