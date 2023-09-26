import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const BenefitService = ({
  item,
  index,
  checkedArr,
  updateChecked,
  toggleMenu,
  updateFeatures,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={
          checkedArr[index].open || checkedArr[index].checked
            ? styles.benefitSelected
            : styles.benefit
        }
        onPress={() => {
          updateChecked(index);
          if (!checkedArr[index].feature) {
            toggleMenu(index);
          }
        }}
      >
        <View style={styles.checkBoxDiv}>
          <CheckBox
            checked={checkedArr[index].checked}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#009BDF"
            size={18}
            onPress={() => {
              updateChecked(index);
              if (!checkedArr[index].feature) {
                toggleMenu(index);
              }
            }}
          />
          <Text
            style={[
              styles.text,
              checkedArr[index].checked && styles.selectedText,
            ]}
          >
            {checkedArr[index].feature
              ? "Checkbox (" + checkedArr[index].feature + ") Selected"
              : item.title}
          </Text>
        </View>
        <Icon
          name={checkedArr[index].open ? "angle-up" : "angle-down"}
          style={
            checkedArr[index].open || checkedArr[index].checked
              ? styles.selectedIcon
              : styles.icon
          }
          size={30}
        />
      </TouchableOpacity>

      {checkedArr[index].open ? (
        <View style={styles.popUp}>
          {item.features.map((item, featureIndex) => {
            return (
              <TouchableOpacity
                style={styles.features}
                key={"feature-" + featureIndex}
                onPress={() => updateFeatures(index, item)}
              >
                <Text style={styles.featuresTitle}>{item}</Text>
                <View style={styles.separator} />
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  benefit: {
    width: 360,
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
  benefitSelected: {
    width: 361,
    height: 50,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#009BDF",
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
