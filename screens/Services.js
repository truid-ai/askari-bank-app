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
    width: 361,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  ScrollView: {
    marginBottom: "22%",
    width: "100%",
  },
});
export default Services;
