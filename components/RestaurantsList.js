import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import { restaurants } from "../RestaurantsData";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";

export default function RestaurantsList({ selectedCategory, navigation }) {
  const filteredRestaurants = selectedCategory
    ? restaurants.filter((restaurant) => restaurant.id === selectedCategory)
    : restaurants;

  return (
    <SafeAreaView
      className="flex-1 mt-2 pt-4 items-center bg-gray-100"
      style={{
        borderTopWidth: 0.2,
        borderTopColor: "lightgray",
      }}
    >
      <Text
        className="text-2xl  text-gray-950"
        style={{
          fontFamily: "sans-serif-condensed",
          fontWeight: "700",
        }}
      >
        Restaurants
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} className="w-[80%]">
        {filteredRestaurants.map((restaurant) => (
          <View
            key={restaurant.id}
            className=" mt-6 mb-2 rounded-3xl shadow-lg shadow-gray-600  bg-white"
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Details", {
                  restaurant: restaurant,
                })
              }
            >
              <Image
                source={{ uri: restaurant.image }}
                className="rounded-t-3xl h-32 px-20 items-center justify-center"
              />
              <View className="px-3 py-2 space-y-2 relative ">
                <Text className="text-xl font-bold">{restaurant.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome name="star" size={24} color="indigo" />

                  <Text style={{ marginLeft: 5 }} className="text-lg">
                    {restaurant.rating}
                  </Text>
                </View>

                <Text className="absolute right-5 top-2 bg-gray-50 rounded-full p-5">
                  {restaurant["Delivery Time"]}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
