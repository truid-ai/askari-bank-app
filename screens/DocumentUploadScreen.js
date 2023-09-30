import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { TopComp } from "../components/TopComp";
import { globalStyles } from "../styles";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import screenBar from "../assets/DocumentsUploadScreen/screenBar.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../components/Button";

import { useState } from "react";
import { Disclaimer } from "../components/Disclaimer";
const DocumentUploadScreen = () => {
  const [selectedItemIndexes, setSelectedItemIndexes] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const docsArr = [
    "Please Upload Document 1",
    "Please Upload Document 1",
    "Please Upload Document 1",
    "Please Upload Document 1",
    "Please Upload Document 1",
  ];
  const onSelect = (index) => {
    setSelectedItemIndexes({
      ...selectedItemIndexes,
      [index]: !selectedItemIndexes[index],
    });
  };
  return (
    <ImageBackground
      source={BackgroundImage}
      style={globalStyles.backgroundImage}
    >
      <TopComp
        heading={"Documents"}
        secondHeading={"Documents Upload"}
        barImage={screenBar}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: "20.2%", width: "100%" }}
      >
        <View style={[styles.uploadDocumentsDiv]}>
          {docsArr.map((item, index) => {
            const isSelected = selectedItemIndexes[index];
            return (
              <View key={"upload" + index} style={styles.uploadDocInnerDiv}>
                <View style={styles.textDiv}>
                  <Text style={styles.text}>{item}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={[
                      styles.uploadDoc,
                      isSelected == true
                        ? { borderColor: "#D21C1C", borderWidth: 1 }
                        : null,
                    ]}
                    onPress={() => onSelect(index)}
                  >
                    <View style={styles.clipIcon}>
                      <Icon
                        name="paperclip"
                        size={20}
                        color={isSelected == true ? "#000000" : "#697D95"}
                        style={{
                          marginLeft: 10,
                          marginRight: "2%",
                          marginTop: "18%",
                          transform: [{ rotate: "90 deg" }],
                        }}
                      />
                    </View>
                    <View style={styles.innerTextDiv}>
                      <Text
                        style={
                          isSelected == true
                            ? { color: "#000000" }
                            : { color: "#697D95" }
                        }
                      >
                        {isSelected == true
                          ? "Sample_DOC.pdf"
                          : "Add attachment"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {isSelected == true ? (
                  <View>
                    <Disclaimer
                      iconColor={"#D21C1C"}
                      textColor={"#D21C1C"}
                      text={"Document should not exceed 20 MB"}
                    />
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={globalStyles.btn}>
        <Button Text={"Next"} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textDiv: {
    width: 360,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    padding: 1.5,
  },
  uploadDocumentsDiv: {
    gap: 27,
    marginTop: 20,
    alignItems: "center",
  },
  uploadDocInnerDiv: { gap: 7 },
  uploadDoc: {
    width: 360,
    backgroundColor: "#FFFFFF",
    height: 44,

    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#009BDF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#009BDF",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },

      innerText: { color: "#697D95", fontSize: 50 },
    }),
  },
});

export default DocumentUploadScreen;
