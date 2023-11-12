import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../layouts/Header";
import styles from "./styles/LibraryStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import EmptyCard from "../components/EmptyCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedBookSelector,
  setSelectedBook,
} from "../redux/selectedBookSlice";
import { tempBookSelector, setTempBook } from "../redux/tempBookSlice";

const Library: React.FC = () => {
  /* The code block is defining several variables and functions used in the Library component. */
  const selectedBook = useSelector(selectedBookSelector);
  const dispatch = useDispatch();
  const tempBook = useSelector(tempBookSelector);
  const [books, setBooks] = React.useState([]);
  const [showDeleteIcon, setShowDeleteIcon] = React.useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = React.useState(null);

  React.useEffect(() => {
    if (tempBook && books.length < 3 && !books.includes(tempBook)) {
      setBooks((prevBooks) => [...prevBooks, tempBook]);
    }
  }, [tempBook, books]);

  React.useEffect(() => {
    dispatch(setTempBook(selectedBook));
  }, [dispatch, selectedBook]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showDeleteIcon) {
      timer = setTimeout(() => {
        setShowDeleteIcon(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showDeleteIcon]);

  const deleteBook = (index) => {
    setBooks((prevBooks) => prevBooks.filter((book, i) => i !== index));
  };

  const handleCardPress = (index) => {
    setSelectedBookIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  /* The code block is rendering the UI for the Library component. It includes various views, text
components, and TouchableOpacity components to create a scrollable list of books in the user's
library. The UI also includes sections for currently reading books, book compilations, and
wishlists. The code uses styles defined in the `styles` object to apply styling to the components. */
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header title="Kitaplık" iconName="book-outline" />

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Kitaplarım</Text>
          <TouchableOpacity style={styles.headerLink}>
            <Text style={styles.headerLinkText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        {books.length < 3 ? (
          <View style={styles.alertCard}>
            <Text style={styles.alertCardTitle}>
              Kitaplığına Hoşgeldin! Son bir adım kaldı.
            </Text>
            <Text style={styles.alertCardText}>
              Sana daha uygun öneriler sunabilmemiz için, en sevdiğin 3 kitabı
              kitaplığına ekle.
            </Text>
          </View>
        ) : (
          <View style={styles.alertCard}>
            <Text
              style={[
                styles.alertCardTitle,
                { textAlign: "center", textDecorationLine: "underline" },
              ]}>
              En fazla 3 kitap ekleyebilirsin!
            </Text>
          </View>
        )}

        <View style={styles.bookContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.emptyCard}>
              {books.length < 3 ? (
                <>
                  {books?.map((book, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.selectedBookCard}
                      onPress={() => {
                        handleCardPress(index);
                        setSelectedBook(null);
                      }}>
                      {selectedBookIndex === index && (
                        <Ionicons
                          name="close-circle"
                          size={30}
                          color="red"
                          style={styles.deleteIcon}
                          onPress={() => deleteBook(index)}
                        />
                      )}
                      <Image
                        style={styles.selectedBookImage}
                        source={{
                          uri: book?.image?.url,
                        }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  ))}
                  <EmptyCard />
                </>
              ) : (
                <>
                  {books?.map((book, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.selectedBookCard}
                      onPress={() => {
                        handleCardPress(index);
                        setSelectedBook(null);
                      }}>
                      {selectedBookIndex === index && (
                        <Ionicons
                          name="close-circle"
                          size={30}
                          color="red"
                          style={styles.deleteIcon}
                          onPress={() => deleteBook(index)}
                        />
                      )}

                      <Image
                        style={styles.selectedBookImage}
                        source={{
                          uri: book?.image?.url,
                        }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </View>
          </ScrollView>
        </View>

        <View style={styles.line} />

        <View style={styles.readingContainer}>
          <View style={styles.readingHeader}>
            <Text style={styles.readingTitle}>Şuan okuduklarım</Text>
            <TouchableOpacity style={styles.readingLink}>
              <Text style={styles.readingLinkText}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.readingBody}>
            <View style={styles.readingCard}>
              <Text style={styles.readingCardTitle}>
                Şuan okuduğun kitabı ekle ve kişisel notlar almaya başla!
              </Text>
              <Ionicons name="add-circle" size={50} color="#f09336" />
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.libraryContainer}>
          <View style={styles.libraryCard}>
            <Ionicons name="layers-outline" size={50} color="#f09336" />
            <Text style={styles.libraryCardText}>Kitap Derlemelerim</Text>
          </View>

          <View style={styles.libraryCard}>
            <Ionicons name="menu-outline" size={50} color="#f09336" />
            <Text style={styles.libraryCardText}>İstek Listelerim</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Library;
