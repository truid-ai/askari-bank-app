import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ModalButton from "../components/ModalButton";
import { useState } from "react";
const RegistrationModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const preReq = ["Valid CNIC", "Active Mobile Number", "Active Email Address"];
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      animationType="slide" // You can change the animation type as needed
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.modal}>
        <Text style={styles.modalHeading}>
          Pre-requirements for starting the process
        </Text>
        <Image
          source={require("../assets/RegistrationScreenImages/modalMobileImage.png")}
          style={styles.modalImage}
        />
        {preReq.map((item, index) => {
          return (
            <View style={styles.modalPreReq} key={index}>
              <View style={styles.modalIndex}>
                <Text style={styles.modalIndexNum}>{index + 1}</Text>
              </View>
              <Text style={styles.modalText}>{item}</Text>
            </View>
          );
        })}
        <ModalButton Title={"Next"} Func={toggleModal} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    width: 342,
    height: 531,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 10,
    top: 147,
    left: 25,
  },
  modalHeading: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    width: 314,
    lineHeight: 24.2,
    padding: 17,
  },
  modalImage: {
    width: 177,
    height: 177,
    marginBottom: 15,
  },

  modalPreReq: {
    flexDirection: "row",
    gap: 10,
    width: 314,
    padding: 15,
    alignItems: "center",
  },
  modalIndex: {
    backgroundColor: "#EBF8FF",
    borderRadius: 70,
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  modalIndexNum: {
    fontSize: 16,
    color: "#009BDF",
  },
  modalText: {
    color: "#009BDF",
    fontWeight: "400",
    fontSize: 12,
  },
});
export default RegistrationModal;
