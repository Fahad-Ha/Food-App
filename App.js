import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/index";
import SideDrawer from "./components/navigation/drawer";
import ThemeContext, { themeColors } from "./context/ThemeContext";
import { useContext } from "react";

export default function App() {
  const themeColors = useContext(ThemeContext); // Access the theme colors using useContext

  return (
    <ThemeContext.Provider value={themeColors}>
      <NavigationContainer>
        <NativeBaseProvider>
          <StatusBar style="auto" />
          <SideDrawer />
        </NativeBaseProvider>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
