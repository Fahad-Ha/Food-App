import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ItemDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Item added to cart:", item.name, "Quantity:", quantity);
    // const count = quantity;
    navigation.goBack();
  };
  console.log(item.image);
  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View className="flex-1 relative bg-gray-100">
      <Image source={{ uri: item.image }} className="w-full h-72 mb-4" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute bg-indigo-500 top-14 left-4 rounded-full shadow p-2"
      >
        <Feather name="arrow-left" size={32} color={"white"} />
      </TouchableOpacity>
      <View className="flex-1 p-4 ">
        <Text className="text-2xl font-bold mb-2">{item.name}</Text>
        <Text className="text-base mb-4">Description: loren ipsum</Text>
        {/* <Text className="text-base mb-4">{item.ingredients}</Text> */}
        <View className="flex-row items-center mb-4 justify-between">
          <Text className="text-xl font-extrabold mx-2 ">
            {quantity * item.price} KD
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrementQuantity}
              className="bg-indigo-600 p-2 rounded-xl shadow-xl shadow-gray-500 mr-2"
            >
              <Feather name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-xl font-bold mx-4">{quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrementQuantity}
              className="bg-indigo-600 p-2 rounded-xl shadow-xl shadow-gray-500 ml-2"
            >
              <Feather name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className=" mt-auto p-4">
        <TouchableOpacity
          onPress={handleAddToCart}
          className=" bg-indigo-600 p-4 rounded-2xl shadow-2xl shadow-gray-500  flex-row justify-between"
        >
          <Text className="text-white text-lg font-bold">Add to Cart</Text>
          <Text className="text-white text-lg font-bold">
            {quantity * item.price} KD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
