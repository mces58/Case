import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    paddingVertical: 10,
  },

  card: {
    width: 190,
    height: 300,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
  },

  bookImage: {
    width: "100%",
    height: 210,
    borderRadius: 10,
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
    textTransform: "capitalize",
    marginRight: 5,
    marginBottom: 8,
    textDecorationLine: "underline",
  },

  bookAuthor: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
    textAlign: "center",
  },

  bookPublisher: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
    marginTop: 8,
    textAlign: "center",
  },
});

export default styles;
