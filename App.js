import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import MainScreen from "./screens/MainScreen.js";
import OpenAccount from "./screens/OpenAccount.js";
import Registeration from "./screens/Registeration.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registeration"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="OpenAccount" component={OpenAccount} />
        <Stack.Screen name="Registeration" component={Registeration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
