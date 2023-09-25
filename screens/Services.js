import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { CheckBox } from "@rneui/themed";

import TopComp from "../components/TopComp";
import ScreenBar from "../assets/Services/screenBar.png";
import Icon from "react-native-vector-icons/FontAwesome";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import Button from "../components/Button";
const benefitsSelection = [
  "I want Cheque Book",
  "I want Debit Card",
  "I want to get SMS Alerts",
];
const Services = () => {
  const [checked, setChecked] = useState(benefitsSelection.map(() => false));
  const toggleCheckbox = (index) => {
    const updatedCheckedItems = [...checked];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setChecked(updatedCheckedItems);
  };

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={BackgroundImage}>
        <TopComp
          Heading={"Services"}
          BarImage={ScreenBar}
          SecondHeading={"Debit Card and Cheque Book Selection"}
        />
        <View style={styles.benefitsList}>
          {benefitsSelection.map((item, index) => {
            return (
              <View style={styles.benefit} key={index}>
                <View style={styles.checkBoxDiv}>
                  <CheckBox
                    checked={checked[index]}
                    onPress={() => toggleCheckbox(index)} // Pass the index to toggle the specific item
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="#009BDF"
                    size={18}
                  />
                  <Text
                    style={[styles.text, checked[index] && styles.selectedText]}
                  >
                    {item}
                  </Text>
                </View>
                <Icon
                  name={checked[index] ? "angle-up" : "angle-down"}
                  style={checked[index] ? styles.selectedIcon : styles.icon}
                  size={30}
                />
              </View>
            );
          })}
          <View style={styles.disclaimerDiv}>
            <Icon
              name="exclamation-circle"
              style={styles.exclamationIcon}
              color={"#009BDF"}
              size={14}
            />
            <Text style={styles.alertText}>
              SMS alerts will cost 20 Rs Monthly
            </Text>
          </View>
        </View>
        <Button Text={"Next"} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  benefitsList: {
    marginTop: 20,
    gap: 20,
  },
  benefit: {
    width: 361,
    height: 50,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    ...Platform.select({
      ios: {
        shadowColor: "#EBF8FF",
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
    }),
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
  checkBoxDiv: {
    flexDirection: "row",
    alignItems: "center",
    gap: -7,
    marginLeft: -6,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: "#BCBCBC",
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: "#009BDF",
  },
  icon: {
    marginRight: 10,
    color: "#BCBCBC",
  },
  selectedIcon: {
    marginRight: 10,
    color: "#009BDF",
  },

  disclaimerDiv: {
    width: 361,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  alertText: {
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 20,
    color: "#009BDF",
  },
});
export default Services;
