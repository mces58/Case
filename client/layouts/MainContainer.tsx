import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Profile from "../screens/Profile";

const homeName = "Ana Sayfa";
const searchName = "Gözat";
const libraryName = "Kitaplık";
const profileName = "Profil";

const Tab = createBottomTabNavigator();

const MainContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            left: 10,
            right: 10,
            elevation: 5,
            backgroundColor: "#eee",
            borderRadius: 10,
            height: 60,
            padding: 10,
            paddingBottom: 10,
          },
        }}>
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{
            tabBarLabel: homeName,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={searchName}
          component={Search}
          options={{
            tabBarLabel: searchName,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={libraryName}
          component={Library}
          options={{
            tabBarLabel: libraryName,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-sharp" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={profileName}
          component={Profile}
          options={{
            tabBarLabel: profileName,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
