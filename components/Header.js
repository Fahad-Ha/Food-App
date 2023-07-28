import { View, Text, SafeAreaView } from "react-native";
import { Heading, Center, HStack, Flex, Box } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <SafeAreaView>
      <Box
        h={24}
        marginY={2}
        borderBottomWidth={0.2}
        borderBottomColor={"gray.300"}
      >
        <HStack space={2} justifyContent="space-around" marginTop={8}>
          <Center className="bg-indigo-400 rounded-full p-3">
            <Feather name="menu" size={24} color="white" />
          </Center>
          <Center>
            <Heading>Munch</Heading>
          </Center>
          <Center className="bg-indigo-400 rounded-full p-3">
            <Feather name="shopping-cart" size={24} color="white" />
          </Center>
        </HStack>
      </Box>
    </SafeAreaView>
  );
}
