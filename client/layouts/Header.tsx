import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles/HeaderStyle";

interface HeaderProps {
  title: string;
  iconName: string;
}

const Header: React.FC<HeaderProps> = ({ title, iconName }) => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.text}>{title}</Text>
      <Ionicons name={iconName} size={30} color="#000" />
    </SafeAreaView>
  );
};

export default Header;
