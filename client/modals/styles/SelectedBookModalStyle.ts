import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  selectedBookModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },

  selectedBookModalContent: {
    width: "80%",
    height: "60%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectedBookModalCard: {
    flex: 0.9,
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
  },

  selectedBookImage: {
    width: "100%",
    height: "65%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 0.7,
  },

  selectedBookCardBody: {
    width: "99%",
    height: "35%",
    padding: 10,
    paddingLeft: 30,
    justifyContent: "space-around",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#eee",
  },
  selectedBookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  selectedBookAuthor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },

  selectedBookPublisher: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },

  noSelectedBookText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  closeModalButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#d6204b",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  closeModalButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
