import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TopComp } from "../components/TopComp";
import ScreenBar from "../assets/FATCAChecks/screenBar.png";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import { CheckBox } from "@rneui/base";

const FATCASchecks = () => {
  const [toggleColor, setToggleColor] = useState(true);
  const [checked, setChecked] = useState("yes");

  const options = ["yes", "no"];
  const questionsArr = [
    "This is the text for question 1?",
    "This is the text for question 2?",
    "This is the text for question 3?",
    "This is the text for question 4?",
  ];
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
            return (
              <View style={styles.checksDiv} key={"check" + index}>
                <View>
                  <Text style={styles.question}>{item}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton.Android
                      value="yes"
                      status={checked === "yes" ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked("yes");
                        setToggleColor(true);
                      }}
                      color={toggleColor == false ? "#D9D9D9" : "#009BDF"}
                    />
                    <Text>Yes</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton.Android
                      value="no"
                      status={checked === "no" ? "checked" : "unchecked"}
                      onPress={() => setChecked("no")}
                      color={"#D9D9D9"}
                    />
                    <Text>No</Text>
                  </View>
                </View>
                <View style={styles.separator} />
              </View>
            );
          })}
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
    display: "flex",
    flexDirection: "row",
  },
  separator: {
    backgroundColor: "#BCBCBC",
    width: 359,
    height: 0.7,
  },
});
