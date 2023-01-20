import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import { Avatar } from "../assets";
import Axios from "../Axios";
import TourCards from "../components/TourCards";
import { AuthContext } from "../services/userContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Discover from "../screens/Discover";

const HomeScreen = () => {
  const { user, setUser } = useContext(AuthContext);
  const Tab = createMaterialBottomTabNavigator();

  const navigation = useNavigation();
  const checkLogin = async () => {
    try {
      let res = await Axios.post("/users/checkLogin");
      setUser(res.data.user);
      if (!res.data.user) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <TailwindProvider>
        <SafeAreaView className="mx-1">
          <View className="flex flex-row justify-between p-4 ">
            <Text className="text-2xl font-bold">
              Hi, <Text className="text-indigo-800">{user?.name}</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={Avatar}
                style={{ width: 50, height: 50, borderRadius: 150 }}
              />
            </TouchableOpacity>
          </View>
          <TourCards />
        </SafeAreaView>
        
      </TailwindProvider>
    </>
  );
};

export default HomeScreen;
