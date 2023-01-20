import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "react-native-elements";

function UserProfilePage() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Handle logout logic here
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 items-center">
      {/* <Text  className="text-2xl mb-2 uppercase mt-3 font-semibold text-indigo-300" >
        Your Profile
      </Text> */}
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          marginTop: 13,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1673972268351-9319c271c8cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text className="text-violet-800 text-2xl">Janish Nehyan</Text>
      <Text>nehyanjanish@gmail.com</Text>
      <Text>+91 8086996655</Text>

      {/* <Input
        label="Update Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Input
        label="Update Image"
        onChangeText={(text) => setImage(text)}
        value={image}
      />
      <Input
        label="Update Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <Input
        label="Update Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <Button
        title="Save Changes"
        onPress={() => {
          // Handle save changes logic here
        }}
      /> */}
      <BookingCard />

      <TouchableOpacity onPress={handleLogout}>
        <Text className="bg-red-400 text-white px-3 py-1">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const BookingCard = ({ booking }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardBody}>
        <View style={styles.cardLeft}>
          <Icon name="calendar" type="font-awesome" color="#7D3C98" size={20} />
          <Text style={styles.cardText}>my bookings</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#F5F5F5",
    borderWidth: 0,
    shadowColor: "#7D3C98",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#7D3C98",
    textTransform:"uppercase"
  },
});

export default UserProfilePage;
