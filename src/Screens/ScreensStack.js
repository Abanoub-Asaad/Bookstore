import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import BookDetails from "../Components/BookDetails";
import profile from "./profile";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function BookStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book Details" component={BookDetails} />
    </Stack.Navigator>
  );
}

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
              route.name == "Home"
                ? (iconame = "home")
                : route.name == "Categories"
                  ? (iconame = "bars")
                  : route.name == "Search"
                    ? (iconame = "search1")
                    : route.name == "Quotes"
                      ? (iconame = "book")
                      : route.name == "Profile"
                        ? (iconame = "profile")
                        : null;
              return <AntDesign name={iconame} size={size} color={iconcolor} />;
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: iconcolor,
          }}
        >

          <Tab.Screen name="Home" component={BookStack} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Quotes" component={Bookmarks} />
          <Tab.Screen name="Profile" component={profile} />

        </Tab.Navigator>

      </NavigationContainer>
    );
  }
}