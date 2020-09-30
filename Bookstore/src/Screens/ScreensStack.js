import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import profile from "./profile";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default class ScreensStack extends React.Component {

  render() {
  let iconcolor = "#FF8C00";
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
          },
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
  );}
}