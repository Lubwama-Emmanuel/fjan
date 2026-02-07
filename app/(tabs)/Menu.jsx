import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FoodCard from "../../components/FoodCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Menu() {
  const router = useRouter();
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          source={require("./../../assets/food_bg.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>
            {/* Location Conatiner */}
            <View>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Your Location</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="white"
                />
              </View>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={24} color="white" />
                <Text style={styles.cityText}>Kira, Kiyinda</Text>
              </View>
            </View>

            {/* Icons Container */}
            <View style={styles.mainIconContainer}>
              <View style={styles.iconContainer}>
                <Feather name="search" size={24} color="white" />
              </View>
              <Pressable
                onPress={() => router.push("/Notifications")}
                style={styles.iconContainer}
              >
                <FontAwesome name="bell-o" size={24} color="white" />
              </Pressable>
            </View>
          </View>
          <Text style={styles.tagline}>Provide the best food for you</Text>
        </ImageBackground>

        {/* Status Bar Component */}
        <StatusBar style="light" />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          <View style={styles.seeContainer}>
            <Text style={styles.findText}>Find by Category</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>

          {/* Category Container */}
          <View style={styles.mainCategoryContainer}>
            <View style={styles.categoryContainer}>
              <Image
                source={require("./../../assets/burger.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Burger</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Image
                source={require("./../../assets/taco.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Taco</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Image
                source={require("./../../assets/drink.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Drink</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Image
                source={require("./../../assets/pizza.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Pizza</Text>
            </View>
          </View>

          {/* Food Container */}
          <View>
            <View style={styles.foodMainContainer}>
              {/* Food Item */}
              <FoodCard
                image={require("./../../assets/food1.png")}
                name={"Ordinary Burgers"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
              <FoodCard
                image={require("./../../assets/food2.png")}
                name={"Burger With Meat"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
            </View>
            <View style={styles.foodMainContainer}>
              {/* Food Item */}
              <FoodCard
                image={require("./../../assets/food1.png")}
                name={"Ordinary Burgers"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
              <FoodCard
                image={require("./../../assets/food2.png")}
                name={"Burger With Meat"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
            </View>
            <View style={styles.foodMainContainer}>
              {/* Food Item */}
              <FoodCard
                image={require("./../../assets/food1.png")}
                name={"Ordinary Burgers"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
              <FoodCard
                image={require("./../../assets/food2.png")}
                name={"Burger With Meat"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
            </View>
            <View style={styles.foodMainContainer}>
              {/* Food Item */}
              <FoodCard
                image={require("./../../assets/food1.png")}
                name={"Ordinary Burgers"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
              <FoodCard
                image={require("./../../assets/food2.png")}
                name={"Burger With Meat"}
                rating={4.9}
                price={"UGX 15,000"}
                location={"900m"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    height: windowHeight * 0.3,
    width: windowWidth,
    paddingTop: 60,
    paddingBottom: 35,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
  },
  imageView: {
    justifyContent: "space-between",
  },
  locationText: {
    color: "white",
    fontSize: 18,
    fontWeight: 400,
  },
  cityText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 6,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainIconContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  tagline: {
    color: "white",
    fontSize: 40,
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FEAD1D24",
  },
  seeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  findText: {
    fontSize: 20,
    fontWeight: 600,
  },
  seeAllText: {
    fontSize: 20,
    color: "#FE8C00",
  },
  mainCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  categoryImage: {
    height: 60,
    width: 60,
  },
  categoryText: {
    fontSize: 16,
  },
  categoryContainer: {
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 15,
    gap: 5,
    marginBottom: 20,
  },

  foodMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
