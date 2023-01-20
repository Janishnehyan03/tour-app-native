import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import Axios from "../Axios";
import { AuthContext } from "../services/userContext";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { AppStyles } from "../AppStyles";

function Signup({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await Axios.post("/users/login", {
        email,
        password,
      });
      setLoading(false);
      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("user", JSON.stringify(response.data.data));
        navigation.navigate("Home");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      setLoading(false);
      // Handle error
      console.log(error.response);
    }
  };
  return (
    <SafeAreaView>
      <View className={"flex-1 items-center mt-10"}>
        <Text className="text-teal-500 text-left text-3xl font-bold">
          Login To Your Account
        </Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail or phone number"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
          />
        </View>

        {loading ? (
          <TouchableOpacity className=" w-[80%] text-center mt-8 py-3 bg-indigo-500 rounded-[30px]">
            <Text className="text-white font-bold text-xl text-center">
              Processing...
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleLogin()}
            className=" w-[80%] text-center mt-8 py-3 bg-teal-500 rounded-[30px]"
          >
            <Text className="text-white font-bold text-xl text-center">
              Login
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
          className=" w-[80%] text-center mt-8 py-3  border-teal-400 rounded-[30px]"
        >
          <Text className="text-teal-600 font-bold text-xl text-center">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "3%",
  },
  or: {
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    alignItems: "center",
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    alignItems: "center",
    width: 192,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
  },
});

export default Signup;
