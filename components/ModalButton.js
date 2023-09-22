import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ModalButton = (props) => {
  const { Title, Func } = props;
  return (
    <TouchableOpacity onPress={Func} style={styles.modalButton}>
      <Text style={styles.modalButtonText}>{Title}</Text>
    </TouchableOpacity>
  );
};
styles = StyleSheet.create({
  modalButton: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#009BDF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: 308,
    height: 56,
    justifyContent: "center",
    marginBottom: 20,
  },
  modalButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default ModalButton;
