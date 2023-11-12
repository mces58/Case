import React from "react";
import { View, Text } from "react-native";
import Header from "../layouts/Header";
import styles from "./styles/DefaultStyle";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <>
      <Header title="Arama" iconName="search-outline" />
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    </>
  );
};

export default Search;
