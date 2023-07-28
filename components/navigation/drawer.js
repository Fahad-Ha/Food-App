import { createDrawerNavigator } from "@react-navigation/drawer";
import DarkModeSettings from "../DarkModeSettings";
import RootNavigator from ".";
import { Switch, Text, View } from "react-native";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

const Drawer = createDrawerNavigator();

// Custom Drawer Content Component
const CustomDrawerContent = ({ isDarkMode, toggleDarkMode }) => {
  const themeColors = useContext(ThemeContext); // Access the theme colors using useContext

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: isDarkMode
          ? themeColors.dark.background
          : themeColors.light.background,
        marginTop: 20,
      }}
    >
      <Text
        className="text-2xl p-2  my-auto rounded-lg"
        style={{
          backgroundColor: isDarkMode
            ? themeColors.dark.subBackground
            : themeColors.light.subBackground,
          color: isDarkMode
            ? themeColors.dark.primary
            : themeColors.light.primary,
        }}
      >
        Rate Us
      </Text>
      {/* You can add other drawer items here */}
      {/* Dark Mode Toggle */}
      <View
        className=" justify-center items-center pb-2 mt-auto"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Switch
          className=" scale-150"
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
        <Text
          className="text-xl"
          style={{
            marginLeft: 8,

            color: isDarkMode
              ? themeColors.dark.primary
              : themeColors.light.primary,
          }}
        >
          Dark Mode
        </Text>
      </View>
    </View>
  );
};

export default function SideDrawer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Implement your dark mode logic here
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Drawer.Navigator
      drawerContent={() => (
        <CustomDrawerContent
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )} // Set the custom drawer content component
      screenOptions={{
        headerShown: false, // Hide the header for all screens within the drawer
      }}
    >
      <Drawer.Screen name="Home" component={RootNavigator} />

      {/* <Drawer.Screen name="Dark Mode Settings" component={DarkModeSettings} /> */}
    </Drawer.Navigator>
  );
}
