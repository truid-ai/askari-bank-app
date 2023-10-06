import {
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { globalStyles } from "../styles/index.js";
import { TopComp } from "../components/TopComp";
import ScreenBar from "../assets/Services/screenBar.png";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import Button from "../components/Button";
import { BenefitService } from "../components/BenefitService.js";
import { Disclaimer } from "../components/Disclaimer.js";
const screenWidth = Dimensions.get("window").width;

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
          heading={"Services"}
          barImage={ScreenBar}
          secondHeading={"Debit Card and Cheque Book Selection"}
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
            <Disclaimer
              textColor={"#009BDF"}
              iconColor={"#009BDF"}
              text={"SMS alerts will cost 20 Rs Monthly"}
            />
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
    alignItems: "center",
  },

  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },

  disclaimerDiv: {
    width: screenWidth * 0.95,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  ScrollView: {
    marginBottom: "20.2%",
    width: "100%",
  },
  alertText: {
    fontWeight: "100",
    fontSize: 14,
    color: "#009BDF",
  },
});
export default Services;
