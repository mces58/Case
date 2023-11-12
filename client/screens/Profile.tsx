import React from "react";
import { View, Text } from "react-native";
import Header from "../layouts/Header";
import styles from "./styles/DefaultStyle";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <>
      <Header title="Profil" iconName="person-outline" />
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    </>
  );
};

export default Profile;
