import { Tabs } from "expo-router";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FE8C00",
      }}
    >
      <Tabs.Screen
        name="Menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="bell-o" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
