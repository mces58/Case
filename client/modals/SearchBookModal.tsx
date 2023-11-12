import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles/SearchBookModalStyle";
import { useDispatch, useSelector } from "react-redux";
import { booksSelector, getBooks } from "../redux/booksSlice";
import BookCard from "../components/BookCard";
import { selectedBookSelector } from "../redux/selectedBookSlice";
import { useNavigation } from "@react-navigation/native";
import SelectedBookModal from "./SelectedBookModal";

interface SearchBookModalProps {
  isSeachBookModalVisible: boolean;
  toggleSeachBookModal: () => void;
}

/* The code defines a functional component called `SearchModal` which is a modal component for
searching books. It takes two props `isSeachBookModalVisible` and `toggleSeachBookModal` to control
the visibility of the modal. */
const SearchModal: React.FC<SearchBookModalProps> = ({
  isSeachBookModalVisible,
  toggleSeachBookModal,
}) => {
  const [isInputFocused, setInputFocused] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const selectedBook = useSelector(selectedBookSelector);
  const [isSelectedBookModalVisible, setSelectedBookModalVisible] =
    React.useState(false);
  const newBooks = books?.data?.books;
  const navigation = useNavigation();

  React.useEffect(() => {
    dispatch(getBooks({ search: searchText }));
  }, [dispatch, searchText]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSeachBookModalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={toggleSeachBookModal}>
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            onPress={toggleSeachBookModal}
            style={styles.closeModal}>
            <View style={styles.line} />
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <Ionicons
              name={"search-outline"}
              size={20}
              color="gray"
              style={styles.searchIcon}
            />

            <TextInput
              placeholder="Bir kitap ya da yazar adı ara"
              style={styles.input}
              placeholderTextColor="gray"
              onFocus={() => setInputFocused(true)}
              // onBlur={() => setInputFocused(false)}
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
            />

            {(isInputFocused && (
              <Ionicons
                name={"close-circle-outline"}
                size={24}
                color="gray"
                style={styles.closeIcon}
                onPress={() => {
                  setInputFocused(false);
                  setSearchText("");
                }}
              />
            )) || (
              <MaterialIcons
                name={"mic-none"}
                size={24}
                color="gray"
                style={styles.closeIcon}
              />
            )}
          </View>

          {newBooks?.length > 0 ? (
            <>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Okumuş Olabileceğin Kitaplar</Text>
                <Text style={styles.subtitle}>
                  Kartlara tıklayarak seçim yapabilirsin
                </Text>
              </View>

              <View>
                <BookCard books={newBooks} />
              </View>

              <TouchableOpacity
                style={[
                  styles.addButton,
                  { display: selectedBook ? "flex" : "none" },
                ]}
                onPress={() => {
                  setSelectedBookModalVisible(true);
                }}>
                <Text style={[styles.addButtonLabel]}>Seçimi Ekle</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={[styles.notFoundContainer]}>
              <View style={styles.notFoundHeader}>
                <MaterialIcons
                  name={"search-off"}
                  size={28}
                  color="gray"
                  style={styles.closeIcon}
                />
                <Text style={styles.notFoundTitle}>
                  Upps! Aradığın kitap bulunamadı
                </Text>
              </View>
              <Text style={styles.notFoundText}>
                Lütfen arama kriterini değiştirerek
                <Text style={styles.tryText} onPress={() => setSearchText("")}>
                  {" "}
                  tekrar dene
                </Text>
              </Text>
            </View>
          )}

          <SelectedBookModal
            visible={isSelectedBookModalVisible}
            closeModal={() => setSelectedBookModalVisible(false)}
            selectedBook={selectedBook}
            navigation={navigation}
            closeSearchModal={toggleSeachBookModal}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SearchModal;
