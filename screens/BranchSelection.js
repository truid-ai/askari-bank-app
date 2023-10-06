import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import screenBar from "../assets/BranchSelection/screenBar.png";
import { globalStyles } from "../styles";
import { TopComp } from "../components/TopComp";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import Button from "../components/Button";
const screenWidth = Dimensions.get("window").width;

const BranchSelection = () => {
  const [checked, setChecked] = useState({
    0: false,
    1: false,
  });
  const arr = [
    {
      title: "Select your city",
      Det: "Islamabad",
      branches: ["Text", "Text", "Text", "Text"],
    },
    {
      title: "Select your branch",
      Det: "Branch",
      branches: ["Text", "Text", "Text"],
    },
  ];
  const onSelect = (index) => {
    setChecked({
      ...checked,
      [index]: !checked[index],
    });
    console.log(checked);
  };
  return (
    <ImageBackground
      source={BackgroundImage}
      style={globalStyles.backgroundImage}
    >
      <TopComp
        heading={"Branch"}
        secondHeading={"Branch Selection"}
        barImage={screenBar}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.lowerComp}
      >
        {arr.map((item, index) => {
          return (
            <View key={"item" + index} style={styles.selectWrapper}>
              <View style={styles.branchDiv}>
                <View style={styles.textDiv}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
                <TouchableOpacity
                  style={styles.detsDiv}
                  onPress={() => {
                    onSelect(index);
                  }}
                >
                  <View style={styles.cityText}>
                    <Text>{item.Det}</Text>
                  </View>
                  <View style={styles.iconDiv}>
                    <Icon
                      name={checked[index] == true ? "angle-up" : "angle-down"}
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              {checked[index] == true ? (
                <View style={styles.branchNamesDiv}>
                  <View>
                    <View style={styles.search}>
                      <Icon
                        name={"search"}
                        size={15}
                        color={"#BCBCBC"}
                        style={styles.icon}
                      />
                      <Text style={styles.searchText}>Search</Text>
                    </View>
                    <ScrollView
                      contentContainerStyle={styles.branchesContainer}
                    >
                      {item.branches.map((item, index) => {
                        return (
                          <View
                            style={styles.branches}
                            key={"branches" + index}
                          >
                            <Text style={styles.branchText}>{item}</Text>
                          </View>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
      <View style={globalStyles.btn}>
        <Button Text={"Next"} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  lowerComp: {
    gap: 25,
    marginTop: 25,
    alignItems: "center",
    paddingBottom: 150,
  },
  selectWrapper: {
    width: screenWidth,
    alignItems: "center",
  },
  branchesContainer: {
    width: screenWidth * 0.95,
    height: 150,
    overflow: "scroll",
  },
  branchDiv: {
    width: screenWidth * 0.95,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",

    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#000000",
        elevation: 5,
        borderBottomWidth: 4,
        borderBottomColor: "transparent",
      },
    }),
  },
  textDiv: {
    height: 37,
    backgroundColor: "#EBF8FF",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#009BDF",
    fontWeight: "500",
    fontSize: 14,
  },
  cityText: {
    justifyContent: "center",
    height: 44,
    paddingLeft: "4%",
  },
  detsDiv: { flexDirection: "row", justifyContent: "space-between" },
  iconDiv: {
    justifyContent: "center",
    paddingRight: "4%",
  },
  branchNamesDiv: {
    width: screenWidth * 0.95,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,

    marginBottom: 7,

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
    marginTop: "2.5%",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  branches: {
    width: screenWidth * 0.95,
    alignItems: "center",
    gap: 10,
  },

  searchText: {
    color: "#BCBCBC",
    fontWeight: "400",
    fontSize: 13,
  },
  branchText: {
    width: 343,
    color: "#BCBCBC",
    padding: 10,
    borderBottomColor: "#BCBCBC",
    borderBottomWidth: 1,
  },
  separator: {
    width: 343,
    height: 1,
    backgroundColor: "#E8EDF1",
    marginBottom: 10,
  },
});
export default BranchSelection;
