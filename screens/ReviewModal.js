import { Image, Modal } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import image from "../assets/InformationReview/modalImage.png";
import Button from "../components/Button.js";
import { useState } from "react";

const ReviewModal = (props) => {
  const [secondModal, setsecondModal] = useState(false);
  const onConfirm = () => {
    setsecondModal(true);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={props.modalToggle}>
      <View style={secondModal == true ? styles.secondModal : styles.modal}>
        <Text style={styles.text}>
          {secondModal == true
            ? "Application has been submitted Successfully "
            : "Confirm Submission"}
        </Text>
        {secondModal == false ? (
          <Image source={image} style={styles.image} />
        ) : null}
        <Text style={styles.confirmationText}>
          {secondModal == true
            ? "You will be contacted by the bank in 2 business days. "
            : "Are you sure to submit application?"}
        </Text>
        <View style={styles.buttons}>
          <Button
            Text={secondModal == true ? "Go to Log In" : "Confirm"}
            type={"ModalBtn"}
            func={onConfirm}
          />
          {secondModal == false ? (
            <Button Text={"Go To Information Review"} type={"ModalBtnSecond"} />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    width: 354,
    height: 495,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 10,
    top: 228,
    borderRadius: 1,
  },
  secondModal: {
    width: 354,
    height: 435,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    top: 228,
  },
  text: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    color: "#009BDF",
    marginTop: 30,
    width: 324,
  },
  image: {
    width: 202,
    height: 197,
    marginTop: 17,
  },
  confirmationText: {
    fontWeight: "400",
    fontSize: 15,
    color: "#009BDF",
    marginTop: 35,
    width: 293,
    textAlign: "center",
  },
  buttons: {
    gap: 20,
    marginTop: 30,
  },
});
export default ReviewModal;
