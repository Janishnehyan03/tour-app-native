import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import BottomTabNavigator from "./components/BottomTabNavigator";
import Details from "./screens/Details";
import UserProfilePage from "./screens/UserProfilePage";
import { AuthProvider } from "./services/userContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TailwindProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen
              name="Bottom"
              options={{ headerShown: false }}
              component={BottomTabNavigator}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={UserProfilePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </TailwindProvider>
  );
}
