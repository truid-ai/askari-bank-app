import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import MainScreen from "./screens/MainScreen.js";
import OpenAccount from "./screens/OpenAccount.js";
import Registration from "./screens/Registration.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountTypeSelection from "./screens/AccountTypeSelection.js";
import AccountSelection from "./screens/AccountSelection.js";
import DocumentUploadScreen from "./screens/DocumentUploadScreen.js";
import Services from "./screens/Services.js";
import FATCAChecks from "./screens/FATCAChecks.js";
import BranchSelection from "./screens/BranchSelection.js";
import TermsAndConditions from "./screens/TermsAndConditions.js";
import ConfirmMotherName from "./screens/ConfirmationMotherName.js";
import ConfirmBirthPlace from "./screens/ConfirmationBirthPlace.js";
import InformationReview from "./screens/InformationReview.js";
import EmployeeBanking from "./screens/EmployeeBanking.js";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
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
        <Stack.Screen name="FATCAChecks" component={FATCAChecks} />
        <Stack.Screen
          name="DocumentUploadScreen"
          component={DocumentUploadScreen}
        />
        <Stack.Screen name="BranchSelection" component={BranchSelection} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="ConfirmMotherName" component={ConfirmMotherName} />
        <Stack.Screen name="ConfirmBirthPlace" component={ConfirmBirthPlace} />
        <Stack.Screen name="InformationReview" component={InformationReview} />
        <Stack.Screen name="EmployeeBanking" component={EmployeeBanking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
