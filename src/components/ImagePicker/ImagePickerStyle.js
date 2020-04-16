import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    borderRadius: 40,
    backgroundColor: "#ECECEC"
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "gray",
    paddingLeft: 0,
    marginBottom: 6
  },
  imagePickerContainer: {
    height: 120,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  selectLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#6b6b6b",
    marginTop: 8,
    textAlign: "center",
    fontStyle: "italic"
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  imageLayer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  closeButtonCotainer: {
    position: "absolute",
    right: 16,
    top: 16,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
