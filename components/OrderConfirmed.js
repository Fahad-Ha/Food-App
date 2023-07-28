import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native"; // Import LottieView
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "native-base";

export default function OrderConfirmed({ navigation }) {
  // Sample data for items bought and estimated delivery time
  const itemsBought = [
    { id: 1, name: "Pizza", price: "10 KD" },
    { id: 2, name: "Burger", price: "8 KD" },
    // Add more items here as per your order
  ];
  const estimatedDeliveryTime = "30 minutes"; // Replace with the actual estimated time

  // State to control the loading animation
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <View className="flex-1 bg-gray-100 justify-evenly items-center ">
      <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0.45)" />

      {/*Back Button*/}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute bg-indigo-500 z-10 top-12 left-4 rounded-full shadow p-2 my-2"
      >
        <Feather name="arrow-left" size={32} color={"white"} />
      </TouchableOpacity>
      <View className=" pt-8">
        <Text className="text-center font-bold text-xl">Order Details</Text>
      </View>
      <Text className="text-lg font-semibold mt-20">
        Estimated Delivery Time: {estimatedDeliveryTime}
      </Text>
      <View className="p-4 bg-indigo-300 rounded-lg shadow-md w-[80%] h-[52%] shadow-gray-900">
        {isLoading ? (
          <View className="items-center justify-center">
            {/* Show loading animation and text while loading */}
            <LottieView
              source={require("../assets/loading_animation4.json")}
              autoPlay
              loop
              style={{ width: 100, height: 200 }}
            />
            <Text className="text-white text-lg font-semibold mb-4">
              Waiting confirmation...
            </Text>
          </View>
        ) : (
          <View className="items-center justify-center">
            {/* Lottie Animation */}
            <LottieView
              source={require("../assets/animation_lkd5pxh5.json")}
              autoPlay
              loop={false}
              style={{ width: 200, height: 200 }}
            />
            <Text className="text-white text-lg font-semibold mb-4">
              Order Confirmed!
            </Text>
          </View>
        )}
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Items Bought:</Text>
          {itemsBought.map((item) => (
            <View key={item.id} className="flex-row justify-between">
              <View className="flex-row">
                <Text className="font-semibold">2 </Text>
                <Text>x {item.name}</Text>
              </View>
              <Text>{item.price}</Text>
            </View>
          ))}
          <View className="flex-row justify-between">
            <Text>Delivery Fee</Text>
            <Text>1 KD</Text>
          </View>
          <View className="flex-row justify-between pt-2">
            <Text className=" font-extrabold">Order Total</Text>
            <Text className=" font-extrabold">19 KD</Text>
          </View>
        </View>
      </View>
      <View className="w-full">
        <TouchableOpacity
          disabled={isLoading}
          onPress={() => navigation.navigate("Home")} // Navigate back to the home screen after confirmation
          className={`bg-indigo-600  mt-6 py-3 mx-10  p-4 rounded-full  shadow-lg shadow-gray-500 ${
            isLoading ? "bg-gray-300" : ""
          }`}
        >
          <Text className="text-white text-center font-bold text-lg ">
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// <View className="items-center justify-center ">
//           {/* Lottie Animation */}
//           <LottieView
//             source={require("../assets/animation_lkd5pxh5.json")}
//             autoPlay
//             loop={false}
//             style={{ width: 200, height: 200 }}
//           />
//         </View>

//         <Text className="text-white text-lg font-semibold mb-4">
//           Order Confirmed!
//         </Text>
//         <View className="space-y-2">
//           <Text className="text-lg font-semibold">Items Bought:</Text>
//           {itemsBought.map((item) => (
//             <View key={item.id} className="flex-row justify-between">
//               <Text>{item.name}</Text>
//               <Text>{item.price}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
