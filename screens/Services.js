import {
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";
import { useState } from "react";
import { globalStyles } from "../styles/index.js";
import { TopComp } from "../components/TopComp";
import ScreenBar from "../assets/Services/screenBar.png";
import Icon from "react-native-vector-icons/FontAwesome";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import Button from "../components/Button";
import { BenefitService } from "../components/BenefitService.js";
const benefitsSelection = [
  {
    title: "I want Cheque Book",
    features: ["21 leaves", "60 leaves", "Text", "Text"],
  },
  {
    title: "I want Debit Card",
    features: ["21 leaves", "60 leaves", "Text", "Text"],
  },
  {
    title: "I want to get SMS Alerts",
    features: ["21 leaves", "60 leaves", "Text", "Text"],
  },
];
const Services = () => {
  const [checkedArr, setCheckedArr] = useState(
    benefitsSelection.map(() => {
      return { checked: false, open: false };
    })
  );
  const updateChecked = (index) => {
    const copyCheckedArr = [...checkedArr];
    copyCheckedArr[index] = {
      open: copyCheckedArr[index].open,
      checked: !copyCheckedArr[index].checked,
    };
    setCheckedArr(copyCheckedArr);
  };
  const toggleMenu = (index) => {
    const copyCheckedArr = [...checkedArr];
    copyCheckedArr[index] = {
      ...(!copyCheckedArr[index].checked && { checked: true }),
      open: !copyCheckedArr[index].open,
    };
    setCheckedArr(copyCheckedArr);
  };
  const updateFeatures = (index, feature) => {
    const copyCheckedArr = [...checkedArr];
    copyCheckedArr[index] = {
      ...copyCheckedArr[index],
      feature,
      open: false,
    };
    setCheckedArr(copyCheckedArr);
  };

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={BackgroundImage}>
        <TopComp
          Heading={"Services"}
          BarImage={ScreenBar}
          SecondHeading={"Debit Card and Cheque Book Selection"}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}
        >
          <View style={styles.benefitsList}>
            {benefitsSelection.map((item, index) => {
              return (
                <BenefitService
                  key={"benefit-selection-" + index}
                  item={item}
                  index={index}
                  checkedArr={checkedArr}
                  updateChecked={updateChecked}
                  toggleMenu={toggleMenu}
                  updateFeatures={updateFeatures}
                />
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
        </ScrollView>
        <View style={globalStyles.btn}>
          <Button Text={"Next"} />
        </View>
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
  popUp: {
    width: 360,
    height: 173,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center",
    marginTop: "3%",
    gap: 10,
    justifyContent: "center",
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
    }),
  },
  features: {
    width: 343,
    gap: 5,
    height: 23,
  },
  ScrollView: {
    marginBottom: "22%",
  },
  separator: { width: 343, height: 1, backgroundColor: "#E8EDF1" },
  alertText: {
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 20,
    color: "#009BDF",
  },
  featuresTitle: {
    color: "#BCBCBC",
  },
});
export default Services;
