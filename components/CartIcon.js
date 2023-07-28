import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CartIcon() {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="flex-row bg-indigo-600 justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg shadow-gray-900 "
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">4</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">3 KD</Text>
      </TouchableOpacity>
    </View>
  );
}
