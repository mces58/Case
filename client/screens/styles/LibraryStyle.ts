import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  headerLink: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },

  headerLinkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },

  alertCard: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
  },

  alertCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  alertCardText: {
    fontSize: 16,
    color: "#666",
  },

  bookContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
    padding: 5,
  },

  emptyCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  deleteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },

  line: {
    height: 2,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },

  readingContainer: {
    marginHorizontal: 20,
  },

  readingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  readingTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  readingLink: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },

  readingLinkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },

  readingBody: {
    marginTop: 20,
  },

  readingCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  readingCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
    flex: 1,
  },

  libraryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 100,
  },

  libraryCard: {
    flex: 0.5,
    width: "100%",
    height: 170,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 7,
  },

  libraryCardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  selectedBookCard: {
    width: 120,
    height: 180,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
  },

  selectedBookImage: {
    width: "100%",
    height: 165,
    borderRadius: 10,
  },
});

export default styles;
