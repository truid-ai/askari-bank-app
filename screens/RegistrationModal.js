import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      <View style={styles.modalContainer}>
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
          <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    width: 342,
    height: 531,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeading: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24.2,
    paddingBottom: 17,
    marginLeft: 0.5,
    marginRight: 0.5,
    marginTop: 15,
  },
  modalImage: {
    width: 177,
    height: 177,
    marginBottom: 19,
    marginTop: 5,
  },

  modalPreReq: {
    flexDirection: "row",
    gap: 10,
    width: 314,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: "center",
  },
  modalIndex: {
    backgroundColor: "#EBF8FF",
    borderRadius: 70,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  modalIndexNum: {
    fontSize: 11,
    color: "#009BDF",
  },
  modalText: {
    color: "#009BDF",
    fontWeight: "400",
    fontSize: 11,
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
    marginBottom: 20,
  },
  modalButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default RegistrationModal;
