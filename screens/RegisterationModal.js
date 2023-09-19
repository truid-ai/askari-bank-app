import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
const RegisterationModal = () => {
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
          source={require("../assets/RegisterationScreenImages/modalMobileImage.png")}
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
        <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    width: 342,
    height: 531,
    backgroundColor: "#FFF",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -175 }, { translateY: -250 }],
    alignItems: "center",
    borderRadius: 10,
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
    marginBottom: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
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
export default RegisterationModal;
