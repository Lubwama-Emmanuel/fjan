import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FoodCard({ image, name, rating, location, price }) {
  const router = useRouter();
  return (
    <Pressable style={styles.foodItem} onPress={() => router.push("/FoodItem")}>
      <View style={styles.heartContainer}>
        <FontAwesome name="heart-o" size={24} color="#F14141" />
      </View>
      <Image source={image} style={styles.foodImage} />
      <View style={styles.foodContent}>
        <Text style={styles.foodtext}>{name}</Text>
        <View>
          <View style={styles.foodDetails}>
            <View style={styles.foodRating}>
              <Entypo name="star" size={24} color="#FE8C00" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.foodRating}>
              <Ionicons name="location-outline" size={24} color="#FE8C00" />
              <Text style={styles.ratingText}>{location}</Text>
            </View>
          </View>

          <Text style={styles.foodPrice}>{price}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    width: (windowWidth * 46) / 100,
    position: "relative",
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },
  foodtext: {
    fontSize: 20,
    marginVertical: 5,
  },
  foodRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  foodLocation: {},
  ratingText: {
    fontSize: 18,
  },
  foodPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FE8C00",
    marginTop: 5,
  },
  foodImage: {
    width: (windowWidth * 45) / 100 - 10,
    height: (windowHeight * 20) / 100,
    borderRadius: 20,
  },
  heartContainer: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },

  foodDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
