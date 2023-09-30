import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import screenBar from "../assets/BranchSelection/screenBar.png";
import { globalStyles } from "../styles";
import { TopComp } from "../components/TopComp";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import Button from "../components/Button";

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
      branches: ["Text", "Text", "Text", "Text"],
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
        style={{ marginBottom: "20.2%", width: "100%" }}
      >
        <View style={styles.lowerComp}>
          {arr.map((item, index) => {
            return (
              <View key={"item" + index}>
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
                        name={
                          checked[index] == true ? "angle-down" : "angle-up"
                        }
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

                      {item.branches.map((item, index) => {
                        return (
                          <View
                            style={styles.branches}
                            key={"branches" + index}
                          >
                            <Text style={styles.branchText}>{item}</Text>
                            <View style={styles.separator} />
                          </View>
                        );
                      })}
                    </View>
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
  lowerComp: {
    gap: 25,
    marginTop: 25,
    alignItems: "center",
  },
  branchDiv: {
    width: 360,
    height: 85,
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
    width: 360,
    height: 192,
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
    gap: 10,
    padding: 10,
  },
  branches: { width: 360, alignItems: "center", gap: 10 },

  searchText: {
    color: "#BCBCBC",
    fontWeight: "400",
    fontSize: 13,
  },
  branchText: { width: 343, color: "#BCBCBC" },
  separator: {
    width: 343,
    height: 1,
    backgroundColor: "#E8EDF1",
    marginBottom: 10,
  },
});
export default BranchSelection;
