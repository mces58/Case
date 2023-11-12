import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  header: {
    padding: 10,
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#1e1e1e",
    borderBottomWidth: 0,
  },

  closeModal: {
    alignItems: "center",
  },

  line: {
    width: 75,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginVertical: 10,
  },

  searchContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eceff1",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#1e1e1e",
    alignSelf: "center",
  },

  searchIcon: {
    marginRight: 10,
  },

  closeIcon: {
    marginLeft: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },

  textContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1e1e",
  },

  subtitle: {
    fontSize: 16,
    color: "#1e1e1e",
  },

  addButton: {
    width: "70%",
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#faa877",
    shadowColor: "#1e1e1e",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  addButtonLabel: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#1e1e1e",
  },

  notFoundContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  notFoundHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  notFoundTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1e1e",
  },

  notFoundText: {
    fontSize: 16,
    color: "#1e1e1e",
  },

  tryText: {
    fontWeight: "bold",
    color: "#faa877",
  },
});

export default styles;
