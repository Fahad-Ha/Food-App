import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function OrderPreparing() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const handleConfirmOrder = () => {
    // Your code to handle order confirmation
    // This is just an example, you should replace it with your actual logic
    setIsConfirmed(true);

    // Delay navigation to "Order Confirmed" screen for 1000ms (1 second)
  };
  useEffect(() => {
    if (isConfirmed && isFocused) {
      // Redirect to "Order Confirmed" screen when the order is confirmed and the screen is focused

      navigation.replace("Order Confirmed");
    }
  }, [isConfirmed, isFocused, navigation]);

  return (
    <View className={`flex-1 ${"bg-white"} justify-center items-center`}>
      {/*Back Button*/}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute bg-indigo-500 z-10 top-12 left-4 rounded-full shadow p-2 my-2"
      >
        <Feather name="arrow-left" size={32} color={"white"} />
      </TouchableOpacity>

      {!isConfirmed ? (
        <View className="bg-indigo-600 p-6 rounded-lg shadow-md">
          <Text className="text-white text-lg font-semibold">
            Preparing your order...
          </Text>
        </View>
      ) : (
        <Animated.View
          style={{
            transform: [
              {
                scale: 1.2,
              },
            ],
          }}
        >
          <View className="bg-green-400 p-6 rounded-lg shadow-md justify-center items-center">
            <Text className="text-white text-lg font-semibold">
              Order Confirmed!
            </Text>
            <FontAwesome
              name="check-circle"
              size={64}
              color="white"
              className="mt-4"
            />
          </View>
        </Animated.View>
      )}

      <TouchableOpacity
        onPress={handleConfirmOrder}
        disabled={isConfirmed}
        className={`${
          isConfirmed ? "bg-gray-300" : "bg-indigo-600"
        } mt-6 py-3 px-8 rounded-lg shadow-md`}
      >
        <Text className="text-white font-semibold">
          {isConfirmed ? "Order Confirmed" : "Confirm Order"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
