import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TopComp } from "../components/TopComp";
import ScreenBar from "../assets/FATCAChecks/screenBar.png";
import { RadioButton } from "react-native-paper";
import Button from "../components/Button";
import { useState } from "react";
import { globalStyles } from "../styles";

const FATCASchecks = () => {
  const [selectedItemIndexes, setSelectedItemIndexes] = useState({});
  const questionsArr = [
    "This is the text for question 1?",
    "This is the text for question 2?",
    "This is the text for question 3?",
    "This is the text for question 4?",
  ];

  const onSelect = (index, value) => {
    setSelectedItemIndexes({
      ...selectedItemIndexes,
      [index]: value,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/BackgroundImage/backgroundImage.png")}
        style={styles.backgroundImage}
      >
        <TopComp
          heading={"FATCA Checks"}
          barImage={ScreenBar}
          secondHeading={"FATCA Checks"}
        />
        <View style={styles.checksContainer}>
          {questionsArr.map((item, index) => {
            const isSelected = selectedItemIndexes[index];

            return (
              <View style={styles.checksDiv} key={"check" + index}>
                <View>
                  <Text style={styles.question}>{item}</Text>
                </View>
                <View style={styles.radioButtonDiv}>
                  <View style={styles.radioButton}>
                    <RadioButton.Android
                      value={"yes"}
                      status={isSelected === "yes" ? "checked" : "unchecked"}
                      onPress={() => onSelect(index, "yes")}
                      uncheckedColor="#D9D9D9"
                      color={"#009BDF"}
                    />
                    <Text
                      style={{
                        ...styles.text,
                        color: isSelected === "yes" ? "#000000" : "#D9D9D9",
                      }}
                    >
                      Yes
                    </Text>
                  </View>
                  <View style={styles.radioButton}>
                    <RadioButton.Android
                      value="no"
                      status={isSelected === "no" ? "checked" : "unchecked"}
                      onPress={() => onSelect(index, "no")}
                      uncheckedColor="#D9D9D9"
                      color={"#009BDF"}
                    />
                    <Text
                      style={{
                        ...styles.text,
                        color: isSelected === "no" ? "#000000" : "#D9D9D9",
                      }}
                    >
                      No
                    </Text>
                  </View>
                </View>
                <View style={styles.separator} />
              </View>
            );
          })}
        </View>
        <View style={globalStyles.btn}>
          <Button Text={"Next"} />
        </View>
      </ImageBackground>
    </View>
  );
};
export default FATCASchecks;
const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
  question: {
    width: 234,
    fontWeight: "500",
    fontSize: 16,
    color: "#252A31",
  },
  checksDiv: { width: 234, height: 57, gap: 9 },
  checksContainer: {
    width: 360,
    marginTop: 30,
    gap: 35,
  },

  radioButtonDiv: {
    flexDirection: "row",
    gap: 17,
  },
  separator: {
    backgroundColor: "#BCBCBC",
    width: 359,
    height: 0.7,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: { fontWeight: "400", fontSize: 16, color: "#000000" },
});
