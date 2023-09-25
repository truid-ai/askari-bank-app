import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopComp from "../components/TopComp";
import BarImage from "../assets/AccountTypeSelection/screenBar.png";
import { useState } from "react";
import Button from "../components/Button";

const AccountTypeSelection = () => {
  const accountTypes = ["Islamic", "Conventional", "Employee Banking"];
  const [selectedType, setSelectedType] = useState("");
  const [islamic, setIslamic] = useState(false);
  const [conventional, setConventional] = useState(false);
  const [employee, setEmployee] = useState(false);
  const onSelect = (item) => {
    setSelectedType(item);
    console.log(selectedType);
  };
  return (
    <View>
      <ImageBackground
        source={require("../assets/BackgroundImage/backgroundImage.png")}
        style={styles.backgroundImage}
      >
        <TopComp
          Heading={"Account Type "}
          BarImage={BarImage}
          SecondHeading={"Account Type Selection"}
        />
        <Image
          source={require("../assets/AccountTypeSelection/mobileImage.png")}
          style={styles.mobileImg}
        />
        <View style={styles.accountTypes}>
          {accountTypes.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                }}
                key={index}
              >
                <View
                  style={[
                    selectedType == item
                      ? styles.selectedAccountType
                      : styles.accountType,
                  ]}
                >
                  <Text style={styles.accountTypeText}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.nextBtn}>
          <Button Text={"Next"} Navigate={"AccountSelection"} />
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
  mobileImg: {
    width: 320.75,
    height: 239,
    marginTop: 15,
  },
  accountTypes: {
    marginTop: 56,
    gap: 20,
  },
  selectedAccountType: {
    width: 360,
    height: 51,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#009BDF",
    alignItems: "center",
    justifyContent: "center",
  },
  accountType: {
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 51,
    flexShrink: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
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
  accountTypeText: {
    width: 225,
    height: 22.313,
    textAlign: "center",
    color: "#009BDF",
    fontSize: 17,
    fontStyle: "normal",
    letterSpacing: 0.34,
  },
  nextBtn: {
    marginTop: 28,
  },
});
export default AccountTypeSelection;
