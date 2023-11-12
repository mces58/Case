import React from "react";
import { View, Text } from "react-native";
import Header from "../layouts/Header";
import styles from "./styles/DefaultStyle";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <Header title="Ana Sayfa" iconName="home-outline" />
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
