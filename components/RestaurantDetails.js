import { ScrollView } from "native-base";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { menu } from "../menuData";
import { StatusBar } from "expo-status-bar";

export default function RestaurantDetails() {
  const route = useRoute();
  const { restaurant } = route.params;
  const navigation = useNavigation();

  const [itemCounts, setItemCounts] = useState({});

  const handleAddItem = (itemId) => {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [itemId]: (prevItemCounts[itemId] || 0) + 1,
    }));
  };
  const handleRemoveItem = (itemId) => {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [itemId]: Math.max((prevItemCounts[itemId] || 0) - 1, 0),
    }));
  };

  // const updateCartItems = (itemId, count) => {
  //   setItemCounts((prevItemCounts) => ({
  //     ...prevItemCounts,
  //     [itemId]: count,
  //   }));
  // };

  useEffect(() => {}, []);

  // Check if there are any values greater than 0 in itemCounts
  const hasItemsInCart = Object.values(itemCounts).some((count) => count > 0);

  return (
    <View className="flex-1">
      <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0.45)" />
      {hasItemsInCart ? <CartIcon /> : ""}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative ">
          <Image className="h-72 w-full" source={{ uri: restaurant.image }} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bg-indigo-500 top-14 left-4 rounded-full shadow p-2"
          >
            <Feather name="arrow-left" size={32} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-gray-100 -mt-12 pt-6"
        >
          <View className="px-5 ">
            <Text className="text-3xl font-bold ">{restaurant.name}</Text>
            {/* each item includes */}
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              className="space-x-2 my-1"
            >
              <FontAwesome name="star" size={24} color="indigo" />
              <Text style={{ marginLeft: 5 }} className="text-lg">
                {restaurant.rating}
              </Text>
            </View>
          </View>
        </View>
        <View className="pb-36 bg-gray-100">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* one item in the menu */}
          {menu.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center bg-white  p-3 rounded-3xl  shadow-2xl shadow-gray-600 mb-3 mx-2"
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Item Details", { item: item })
                }
              >
                <Image
                  className="rounded-2xl"
                  source={{ uri: item.image }}
                  style={{ height: 100, width: 100 }}
                />
              </TouchableOpacity>

              <View className="flex-1 space-y-3">
                <View className="pl-3">
                  <Text className="text-xl">{item.name}</Text>
                  <Text className="text-gray-700">lorem ipsum</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                  <Text className="text-gray-700 text-lg font-bold">
                    {item.price} KD
                  </Text>
                  <View className="flex-row items-center">
                    <TouchableOpacity
                      onPress={() => handleRemoveItem(item.id)}
                      className="bg-indigo-600  p-2 rounded-xl shadow-xl shadow-gray-500"
                    >
                      <Feather name="minus" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="px-5 text-lg">
                      {itemCounts[item.id] || 0}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleAddItem(item.id)}
                      className="bg-indigo-600  p-2 rounded-xl shadow-xl shadow-gray-500"
                    >
                      <Feather name="plus" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
