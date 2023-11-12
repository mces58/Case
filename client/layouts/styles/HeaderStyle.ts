import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 25,
    paddingBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default styles;
