import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import StarRating from "react-native-star-rating";
import { ScrollView } from "react-native-web";
import Axios from "../Axios";

const Card = ({ image, name, rating, price, location, item }) => {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  return (
    <View className="bg-indigo-100 my-1 shadow-xl py-4">
      <Image
        source={{ uri: `https://tours-api.onrender.com/img/tours/${image}` }}
        style={{ width: windowWidth, height: 200 }}
        className="rounded-[20px]"
      />
      <View style={styles.container}>
        <Text className="text-2xl my-2 font-bold text-indigo-600">{name}</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          fullStarColor={"#FECE44"}
          starSize={20}
          containerStyle={styles.starsContainer}
        />
      </View>
      <View className="flex flex-row justify-between py-2">
        <Text className="text-xl font-bold">${price}</Text>
        <View className="flex flex-row items-center">
          <FontAwesomeIcon color="#331b7b" icon={faLocationPin} />
          <Text className="font-bold ml-2 text-indigo-700">{location}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { tour: item })}
        className="flex flex-row py-3 items-center justify-center rounded-[30px] bg-indigo-900"
      >
        <Text className="text-white font-bold text-xl">Get Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const CardList = () => {
  const [tours, setTours] = useState([]);
  const getAllTours = async () => {
    try {
      let res = await Axios.get("/tours");
      setTours(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAllTours();
  }, []);
  return (
    <>
      {!tours.length > 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <FlatList
            data={tours}
            renderItem={({ item }) => (
              <Card
                image={item.imageCover}
                price={item.price}
                name={item.name}
                rating={item.rating}
                location={item.startLocation.description}
                item={item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starsContainer: {
    alignItems: "flex-start",
  },
});

export default CardList;
