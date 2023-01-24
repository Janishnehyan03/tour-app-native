import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Card, Image } from "react-native-elements";

export default function Details() {
  const { params } = useRoute();
  const windowWidth = Dimensions.get("window").width;
  const tour = params.tour;
  console.log(tour.guides);
  return (
    <SafeAreaView style={{ position: "relative", flex: 1 }}>
      <ScrollView>
        <Image
          source={{
            uri: `https://tours-api.onrender.com/img/tours/${tour.imageCover}`,
          }}
          style={{
            width: windowWidth,
            height: 300,
          }}
        />
        <Text className="text-3xl  text-center mt-2 font-bold text-indigo-800">
          {tour.name}
        </Text>
        <Text className="text-center mx-2  text-gray-500">{tour.summary}</Text>
        <Text className="text-3xl  text-center mt-2 font-bold text-gray-900">
          ${tour.price}
        </Text>
        <View className="pb-36">
          <Text className="text-left text-xl font-bold">Highlights:</Text>
          <Text className="text-left leading-6"> {tour.description}</Text>
          <Text className="text-left leading-6">
            {"\u2B24" + " "}
            {tour.maxGroupSize} Members
          </Text>
          <Text className="text-left leading-6">
            {"\u2B24" + " "}
            {tour.duration} Members
          </Text>

          <Text className="text-left text-xl font-bold mt-2">Location:</Text>
          <Text className="text-left leading-6">
            {tour.startLocation.description}
          </Text>
          <Text className="text-left text-xl font-bold my-2">Guides:</Text>

          <View>
            {tour.guides.map((guide, key) => (
              <View key={key} className="flex flex-row items-center">
                <Image
                  source={{
                    uri:
                      "https://tours-api.onrender.com/img/users/" + guide.photo,
                  }}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
                <Text className="ml-4 font-bold">{guide.name}</Text>
              </View>
            ))}
          </View>
          <View>
            <View>
              {tour.images.map((image, key) => (
                <View key={key}>
                  <Image
                    source={{
                      uri: "https://tours-api.onrender.com/img/tours/" + image,
                    }}
                    style={{
                      width: Dimensions.get("screen").width,
                      height: 150,
                      marginTop: 7,
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: Dimensions.get("window").width,
          alignSelf: "center",
        }}
        className="bg-indigo-700 py-3"
      >
        <Text className="text-center font-bold text-white text-2xl">
          Get Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
