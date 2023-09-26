import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { TopComp } from "../components/TopComp";
import BarImage from "../assets/AccountSelection/screenBar.png";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import AccountIcon from "../assets/AccountSelection/accountIcon.png";
import SideArrow from "../assets/AccountSelection/sideArrow.png";
import DownArrow from "../assets/AccountSelection/downArrow.png";
import { useState } from "react";
import AccountFeatures from "../components/AccountFeatures";
import Button from "../components/Button";
import { globalStyles } from "../styles/index.js";
const AccountSelection = () => {
  const [selectCheck, setSelectCheck] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const onSelect = (index) => {
    setSelectedItemIndex(index);
    setSelectCheck(true);
    console.log(selectCheck);
  };
  const accountTypes = [
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
    {
      Title: "Account1",
      FeatureOne: "Feature 1",
      FeatureTwo: "Feature 2",
      FeatureThree: "Feature 3",
      FeatureFour: "Feature 4",
    },
  ];
  return (
    <View>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <TopComp
          Heading={"Account Selection"}
          BarImage={BarImage}
          SecondHeading={"Select the Account"}
        />
        <View style={styles.accountTypes}>
          {console.log(accountTypes)}
          {accountTypes.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={[
                    selectedItemIndex === index
                      ? styles.selectType
                      : styles.type,
                  ]}
                  onPress={() => onSelect(index)}
                >
                  <View style={styles.account}>
                    <Image
                      source={AccountIcon}
                      style={[styles.accountIcon, ,]}
                    />
                    <Text
                      key={index}
                      style={[
                        styles.accountName,
                        selectedItemIndex === index
                          ? { color: "#009BDF" }
                          : { color: "#BCBCBC" },
                      ]}
                    >
                      {item.Title}
                    </Text>
                  </View>
                  <View style={styles.arrow}>
                    <Image
                      source={
                        selectedItemIndex === index ? DownArrow : SideArrow
                      }
                      style={
                        selectedItemIndex === index
                          ? styles.downArrowImg
                          : styles.sideArrowImg
                      }
                    />
                  </View>
                </TouchableOpacity>
                {selectedItemIndex === index ? <AccountFeatures /> : null}
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
const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
  selectType: {
    width: 361,
    height: 49,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#009BDF",
  },
  type: {
    width: 361,
    height: 49,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
  account: {
    flexDirection: "row",
    marginLeft: 10,
  },
  accountTypes: { marginTop: 20, gap: 10 },
  accountIcon: {
    width: 22,
    height: 22,
  },
  sideArrowImg: { width: 6, height: 12, marginRight: 12 },
  downArrowImg: { width: 12, height: 10, marginRight: 12 },
  accountName: {
    width: 200,
    height: 20,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#BCBCBC",
    marginLeft: 12,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    marginBottom: "5%",
  },
});

export default AccountSelection;
