import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FoodItem"
        options={{
          headerTitle: "About the menu",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTransparent: true,
          headerBackTitle: "Back",
          headerRight: () => (
            <View style={styles.heartContainer}>
              <FontAwesome name="heart-o" size={33} color="#F14141" />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  heartContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
