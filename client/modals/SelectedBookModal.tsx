import React from "react";
import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles/SelectedBookModalStyle";
import { setTempBook } from "../redux/tempBookSlice";
import { useDispatch } from "react-redux";
import { setSelectedBook } from "../redux/selectedBookSlice";

/* The code is defining a React functional component called `SelectedBookModal`. It takes in a set of
props defined by the `SelectedBookModalProps` interface. The component renders a modal that displays
information about a selected book. */
interface SelectedBookModalProps {
  visible: boolean;
  closeModal: () => void;
  selectedBook: {
    title: string;
    image: object;
    author: string;
    publisher: string;
  } | null;
  navigation: any;
  closeSearchModal: () => void;
}

const SelectedBookModal: React.FC<SelectedBookModalProps> = ({
  visible,
  closeModal,
  selectedBook,
  navigation,
  closeSearchModal,
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTempBook(selectedBook));
  }, [dispatch, selectedBook]);

  const clearSelectedBook = () => {
    dispatch(setSelectedBook(null));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.selectedBookModalContainer}>
        <View style={styles.selectedBookModalContent}>
          {selectedBook ? (
            <View style={styles.selectedBookModalCard}>
              <Image
                source={{ uri: selectedBook?.image?.url }}
                style={styles.selectedBookImage}
                resizeMode="contain"
              />
              <View style={styles.selectedBookCardBody}>
                <Text style={styles.selectedBookTitle} numberOfLines={1}>
                  {selectedBook?.title}
                </Text>
                <Text style={styles.selectedBookAuthor} numberOfLines={1}>
                  {selectedBook?.author}
                </Text>
                <Text style={styles.selectedBookPublisher} numberOfLines={1}>
                  {selectedBook?.publisher}
                </Text>
              </View>

              <TouchableOpacity
                onPress={closeModal}
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "35%",
                  zIndex: 1,
                }}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={70}
                  color="#333"
                />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.noSelectedBookText}>Bir kitap seçilmedi</Text>
          )}

          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}>
              Kitabın kütüphaneye eklendi
            </Text>

            <Text
              style={{
                fontSize: 16,
                textTransform: "capitalize",
                textAlign: "center",
                color: "#666",
                marginTop: 10,
              }}>
              Not almaya başlayabilirsin
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#1e1e1e",
              padding: 15,
              borderRadius: 40,
              width: "70%",
            }}
            onPress={() => {
              navigation.navigate("Kitaplık");
              closeModal();
              closeSearchModal();
              clearSelectedBook();
            }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "capitalize",
              }}>
              Eklemeye devam et
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SelectedBookModal;
