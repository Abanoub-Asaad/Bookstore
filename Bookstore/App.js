import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home";
import Categories from "./src/Screens/Categories";
import Search from "./src/Screens/Search";
import Bookmarks from "./src/Screens/Bookmarks";
import profile from "./src/Screens/profile";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function App() {
  let iconcolor = "#FF8C00";
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let iconame;
            route.name == "home"
              ? (iconame = "home")
              : route.name == "Categories"
              ? (iconame = "bars")
              : route.name == "Search"
              ? (iconame = "search1")
              : route.name == "Bookmarks"
              ? (iconame = "book")
              : route.name == "Profile"
              ? (iconame = "profile")
              : null;
            return <AntDesign name={iconame} size={size} color={iconcolor} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: iconcolor,
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} />
        <Tab.Screen name="Profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
