import React from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles/EmptyCardStyle";
import SeachBookModal from "../modals/SearchBookModal";

interface EmptyCardProps {}

/**
 * The `EmptyCard` component is a React functional component that renders an empty card with an "Add
 * Book" button and a search book modal.
 * @returns The EmptyCard component is returning a ScrollView component containing a TouchableOpacity
 * component. Inside the TouchableOpacity component, there is an Ionicons component and a Text
 * component. Additionally, the EmptyCard component also renders a SeachBookModal component.
 */
const EmptyCard: React.FC<EmptyCardProps> = () => {
  const [isSeachBookModalVisible, setSeachBookModalVisible] =
    React.useState(false);

  const toggleSeachBookModal = () => {
    setSeachBookModalVisible(!isSeachBookModalVisible);
  };

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.emptyCard}
          onPress={toggleSeachBookModal}>
          <Ionicons name="add-circle" size={50} color="#d6204b" />
          <Text style={styles.emptyCardText}>Kitap Ekle</Text>
        </TouchableOpacity>
      </ScrollView>

      <SeachBookModal
        isSeachBookModalVisible={isSeachBookModalVisible}
        toggleSeachBookModal={toggleSeachBookModal}
      />
    </>
  );
};

export default EmptyCard;
