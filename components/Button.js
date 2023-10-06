import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Button = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* {console.log(props)} */}
      <TouchableOpacity
        style={
          props.type === "ModalBtn"
            ? styles.modalButton
            : props.type === "ModalBtnSecond"
            ? styles.modalButtonSecond
            : styles.button
        }
        onPress={() => {
          console.log("here");
          props.func();
          // props.Navigate
          //   ? navigation.navigate(props.Navigate)
          //   : props.func
          //   ? props.func
          //   : null;
        }}
      >
        <Text
          style={[
            props.type === "ModalBtnSecond"
              ? { color: "#009BDF" }
              : { color: "white" },
            styles.buttonText,
          ]}
        >
          {props.Text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009BDF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    height: 56,
    justifyContent: "center",
    marginTop: 10,
  },
  modalButton: {
    width: 308,
    height: 46,
    borderRadius: 5,
    backgroundColor: "#009BDF",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },

  modalButtonSecond: {
    width: 308,
    height: 46,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#009BDF",
    justifyContent: "center",
  },
});
export default Button;
