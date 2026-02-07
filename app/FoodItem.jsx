import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FoodItem() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require("./../assets/food1.png")}
            style={styles.image}
          />
          <View style={styles.barContainer}>
            <View style={styles.bar}></View>
            <View style={styles.coloredBar}></View>
            <View style={styles.bar}></View>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.name}>Burger With Meat 🍔</Text>
          <Text style={styles.price}>UGX 15,000</Text>

          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <FontAwesome5 name="dollar-sign" size={20} color="#FE8C00" />
              <Text style={styles.optionText}>Free Delivery</Text>
            </View>
            <View style={styles.option}>
              <Ionicons name="time" size={20} color="#FE8C00" />
              <Text style={styles.optionText}>20 - 30</Text>
            </View>
            <View style={styles.option}>
              <FontAwesome name="star" size={20} color="#FE8C00" />
              <Text style={styles.optionText}>4.9</Text>
            </View>
          </View>

          <View style={styles.descContainer}>
            <Text style={styles.descTitle}>Description</Text>
            <Text style={styles.desc}>
              Burger With Meat is a typical food from our restaurant that is
              much in demand by many people, this is very recommended for you.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cartContainer}>
        <View style={styles.quantityContainer}>
          <View style={styles.increments}>
            <Pressable onPress={() => setQuantity((quantity) => quantity - 1)}>
              <Entypo name="minus" size={30} color="black" />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={() => setQuantity((quantity) => quantity + 1)}>
              <Entypo name="plus" size={30} color="black" />
            </Pressable>
          </View>
          <Text style={styles.quantityPrice}>{15000 * quantity}</Text>
        </View>

        <Pressable style={styles.cartButton}>
          <AntDesign name="shopping-cart" size={24} color="white" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: windowWidth,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.5,
  },
  barContainer: {
    position: "absolute",
    bottom: 60,
    left: (windowWidth - 50) / 3,
    flexDirection: "row",
  },
  bar: {
    height: 6,
    width: 50,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  coloredBar: {
    height: 6,
    width: 50,
    backgroundColor: "#FE8C00",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  contentContainer: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50,
    padding: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
  },
  price: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FE8C00",
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 20,
    marginTop: 20,
  },
  optionText: {
    fontSize: 16,
    color: "gray",
  },
  descContainer: {
    marginTop: 30,
  },
  descTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  desc: {
    fontSize: 18,
    color: "gray",
    fontWeight: "400",
  },
  cartContainer: {
    padding: 25,
    gap: 30,
  },
  increments: {
    flexDirection: "row",
    gap: 25,
  },
  quantity: {
    fontSize: 24,
    fontWeight: "600",
  },
  quantityPrice: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FE8C00",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartButton: {
    backgroundColor: "#FE8C00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 100,
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
