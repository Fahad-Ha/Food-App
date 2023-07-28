import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { menu } from "../menuData";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native"; // Import LottieView
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState(menu); // Store cart items in state
  const navigation = useNavigation();

  // Function to handle item deletion
  const handleItemDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
    return totalPrice.toFixed(2);
  };
  return (
    <SafeAreaView className=" flex-1">
      <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0.45)" />

      {/*Back Button*/}
      <View
        className="bg-gray-100"
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "flex-start",
          paddingBottom: 6,
          paddingTop: 8,
          paddingLeft: 10, // Add padding to the left for the arrow to go to the left
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" bg-indigo-500 z-10 rounded-full shadow p-2 top-5 absolute left-4"
        >
          <Feather name="arrow-left" size={32} color={"white"} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          className="pb-6 pt-2 flex flex-col  "
        >
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500 text-lg mt-1">
            Pizza Hut
          </Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View className="bg-indigo-300 flex-row items-center px-4 py-3">
        <View className=" bg-indigo-200 rounded-full">
          <LottieView
            source={require("../assets/animation_delivery.json")} // Replace with your Lottie animation file
            autoPlay
            loop
            className="w-[100px] h-[80px] "
          />
        </View>

        <Text className="flex-1 font-semibold justify-center text-center">
          Deliver in 20-30 minutes
        </Text>
      </View>

      {/* food order items */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-6 pb-20 h-full"
      >
        {cartItems.map((item) => {
          return (
            <View
              key={item.id}
              className="flex-row items-center py-3 space-x-3 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg shadow-gray-500 "
            >
              <Text className="font-bold text-indigo-600">2 x</Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: item.image }}
              />
              <Text className="flex-1 font-bold text-gray-800">
                {item.name}
              </Text>
              <Text className="font-semibold text-base">{item.price} KD</Text>
              <TouchableOpacity
                onPress={() => handleItemDelete(item.id)}
                className="bg-indigo-600 p-2 rounded-xl shadow-xl shadow-gray-500 "
              >
                <Feather name="minus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* {      total */}
      {cartItems.length > 0 ? (
        <View className="p-6 px-8 rounded-t-3xl space-y-4 bg-indigo-300">
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">{calculateTotal()}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">1 KD</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">
              {(parseFloat(calculateTotal()) + 1).toFixed(2)} KD
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.replace("Order Confirmed")}
              className="p-3 rounded-full bg-indigo-600 shadow-lg shadow-gray-500"
            >
              <Text className="text-white text-center font-bold text-lg ">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="h-[90%] my-auto justify-center  items-center px-8 rounded-t-3xl bg-white">
          <Text className=" font-extrabold text-4xl mb-32">Cart Empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
