import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import separator from "../assets/InformationReview/separator.png";
const ConfirmationComp = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemPress = (index) => {
    setSelectedIndex(index);
    // You can perform any other actions related to the selected item here
  };

  return (
    <View style={styles.outerContainer}>
      {props.arr.map((item, index) => (
        <View key={"confirm" + index}>
          <TouchableOpacity
            style={
              props.shape == "circle"
                ? [
                    styles.circleContainer,
                    selectedIndex === index
                      ? styles.circleSelectedContainer
                      : null,
                  ]
                : props.shape == "square"
                ? [styles.squareContainer]
                : null
            }
            key={"confirmation" + index}
            onPress={() => handleItemPress(index)}
          >
            <Text
              style={
                props.shape == "circle"
                  ? [
                      styles.text,
                      selectedIndex === index ? styles.selectedText : null,
                    ]
                  : props.shape == "square"
                  ? styles.squareText
                  : null
              }
            >
              {item}
            </Text>

            {props.shape == "circle" && selectedIndex === index ? (
              <View style={styles.circle} />
            ) : null}
            {props.shape == "square" && selectedIndex === index ? (
              <View style={[styles.square, { backgroundColor: "#FCF3F3" }]}>
                <Icon name="minus" size={11} color="#970C0C" />
              </View>
            ) : props.shape == "square" ? (
              <View style={[styles.square, { backgroundColor: "#EBF8FF" }]}>
                <Icon name="plus" size={11} color="#009BDF" />
              </View>
            ) : null}
          </TouchableOpacity>
          {props.shape == "square" && selectedIndex === index ? (
            <View style={styles.selectedSquare}>
              <View style={styles.squareInnerContainer}>
                <View>
                  <Text style={styles.squareInnerContainerText}>Name</Text>
                </View>
                <View>
                  <Text style={styles.squareInnerContainerText}>
                    Father/Husband Name
                  </Text>
                </View>
              </View>
              <Image source={separator} style={styles.separator} />
              <View style={styles.squareInnerContainer}>
                <View>
                  <Text style={styles.squareInnerContainerText}>
                    Lorem Ipsum
                  </Text>
                </View>
                <View>
                  <Text style={styles.squareInnerContainerText}>
                    Lorem Ipsum
                  </Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  circleContainer: {
    width: 360,
    height: 51,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
  squareContainer: {
    width: 360,
    height: 51,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#000000",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
  },
  outerContainer: {
    gap: 27,
    marginTop: 30,
  },
  text: {
    paddingLeft: 15,
    color: "#BCBCBC",
    fontSize: 16,
    fontWeight: 400,
  },
  squareText: {
    paddingLeft: 15,
    color: "#252A31",
    fontSize: 14,
    fontWeight: 500,
  },
  circleSelectedContainer: {
    borderWidth: 1,
    borderColor: "#009BDF",
  },
  selectedText: {
    color: "#009BDF",
  },
  circle: {
    width: 12,
    height: 12.7,
    marginRight: 15,
    backgroundColor: "#0083CB",
    borderRadius: 6,
  },
  square: {
    width: 32,
    height: 32,
    marginRight: 15,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSquare: {
    width: 360,
    height: 98,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    gap: 14,
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 2,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#000000",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
  },
  squareInnerContainer: {
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    gap: 25,
  },
  squareInnerContainerText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#252A31",
  },

  separator: {
    width: 9.2,
    height: 56,
  },
});
export default ConfirmationComp;
