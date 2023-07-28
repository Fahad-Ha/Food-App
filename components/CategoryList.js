import { View, Text, Image } from "react-native";
import { Heading, Center, Box, Spacer, Avatar, ScrollView } from "native-base";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { categories } from "../categoriesData";
import RestaurantsList from "./RestaurantsList";
import { useState } from "react";
import Header from "./Header";

export default function CategoryList({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (categoryId) => {
    if (selectedCategory === categoryId) {
      // Clicked category is already selected, reset the filter
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };
  return (
    <SafeAreaView className=" flex-1 bg-gray-100 ">
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          w={"full"}
          h={"22%"}
          paddingX={6}
        >
          {categories.map((category) => (
            <View
              key={category.id}
              className="flex justify-center items-center mr-8 "
            >
              <TouchableOpacity
                onPress={() => handleCategoryPress(category.id)}
                className="mx-1 shadow-2xl items-center"
              >
                <View
                  style={{ padding: 10 }}
                  className={`  rounded-full bg-white  shadow-lg shadow-gray-600 ${
                    selectedCategory === category.id
                      ? "text-white bg-indigo-500 "
                      : ""
                  }`}
                >
                  <Image
                    className="rounded-full  "
                    style={{ width: 90, height: 90 }}
                    source={{ uri: category.image }}
                  />
                  <Text className="text-sm font-semibold p-1 text-center">
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <RestaurantsList
        navigation={navigation}
        selectedCategory={selectedCategory}
      />
    </SafeAreaView>
  );
}
