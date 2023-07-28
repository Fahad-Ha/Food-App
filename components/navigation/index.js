import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryList from "../CategoryList";
import Cart from "../Cart";
import RestaurantDetails from "../RestaurantDetails";
import { Feather } from "@expo/vector-icons";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import ItemDetails from "../ItemDetails";
import OrderPrepairing from "../OrderPrepairing";
import OrderConfirmed from "../OrderConfirmed";

export default function RootNavigator() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Navigator>
      <Screen
        name="Home"
        options={{
          headerStyle: { backgroundColor: "#6366F1" },
          headerTitle: "Munch",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },

          headerLeft: () => (
            <View className=" rounded-full mb-5 pt-6 px-2">
              <Feather
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View className=" rounded-full mb-5 pt-6 px-2">
              <Feather
                name="shopping-cart"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Cart")}
              />
            </View>
          ),
        }}
        component={CategoryList}
      />
      <Screen
        name="Restaurant Details"
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={RestaurantDetails}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Screen
        name="Item Details"
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={ItemDetails}
      />
      <Screen
        name="Order Prepairing"
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={OrderPrepairing}
      />
      <Screen
        name="Order Confirmed"
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={OrderConfirmed}
      />
    </Navigator>
  );
}
