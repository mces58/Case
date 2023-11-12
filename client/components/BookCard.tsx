import * as React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./styles/BookCardStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedBookSelector,
  setSelectedBook,
} from "../redux/selectedBookSlice";

interface BookCardProps {
  books: [];
}

/**
 * The `BookCard` component is a horizontal scrollable list of book cards, where each card displays
 * information about a book and allows the user to select a book.
 * @param  - - `BookCardProps`: The type definition for the props passed to the `BookCard` component.
 * @returns The BookCard component is returning a ScrollView component that contains a SafeAreaView
 * component. Inside the SafeAreaView, there is a list of TouchableOpacity components, each
 * representing a book. The TouchableOpacity components display the book's image, title, author, and
 * publisher. The background color of each TouchableOpacity component is determined by whether it is
 * selected or not.
 */
const BookCard: React.FC<BookCardProps> = ({ books }) => {
  const [selectedBookIndex, setSelectedBookIndex] = React.useState(null);
  const dispatch = useDispatch();

  const handleBookSelection = (index) => {
    if (selectedBookIndex === index) {
      setSelectedBookIndex(null);
      dispatch(setSelectedBook(null));
    } else {
      setSelectedBookIndex(index);
      dispatch(setSelectedBook(books[index]));
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        {books.map((book, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              {
                marginRight: index !== books.length - 1 ? 10 : 0,
                backgroundColor:
                  selectedBookIndex === index ? "#f6d9bd" : "#eee",
              },
            ]}
            onPress={() => handleBookSelection(index)}>
            <Image
              source={{
                uri: book?.image?.url,
              }}
              style={styles.bookImage}
              resizeMode="contain"
            />
            <Text style={styles.bookTitle} numberOfLines={1}>
              {book?.title}
            </Text>
            <Text style={styles.bookAuthor} numberOfLines={1}>
              {book?.author}
            </Text>
            <Text style={styles.bookPublisher} numberOfLines={1}>
              {book?.publisher}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default BookCard;
