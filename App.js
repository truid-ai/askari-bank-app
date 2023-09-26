import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import MainScreen from "./screens/MainScreen.js";
import OpenAccount from "./screens/OpenAccount.js";
import Registration from "./screens/Registration.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountTypeSelection from "./screens/AccountTypeSelection.js";
import AccountSelection from "./screens/AccountSelection.js";
import Services from "./screens/Services.js";
const Stack = createStackNavigator();
//test
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Services"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="OpenAccount" component={OpenAccount} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="AccountSelection" component={AccountSelection} />
        <Stack.Screen
          name="AccountTypeSelection"
          component={AccountTypeSelection}
        />
        <Stack.Screen name="Services" component={Services} />
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
