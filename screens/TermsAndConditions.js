import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import { globalStyles } from "../styles";
import { TopComp } from "../components/TopComp";
import Button from "../components/Button";
import screenBar from "../assets/TermsAndConditions/screenBar.png";
import { color } from "@rneui/base";
const AgreementPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [acceptButtonDisabled, setAcceptButtonDisabled] = useState(true);

  const termsAndConditions = `
  Lorem ipsum dolor sit amet consectetur. Vitae quis suspendisse pretium scelerisque vitae. Et mauris augue libero quam dictum. Mauris nisl cras aliquet in dolor. Urna adipiscing ut suspendisse suspendisse malesuada volutpat quis donec.
  Lorem ipsum dolor sit amet consectetur. Vitae quis suspendisse pretium scelerisque vitae. Et mauris augue libero quam dictum. Mauris nisl cras aliquet in dolor. Urna adipiscing ut suspendisse suspendisse malesuada volutpat quis donec.
  Lorem ipsum dolor sit amet consectetur. Vitae quis suspendisse pretium scelerisque vitae. Et mauris augue libero quam dictum. Mauris nisl cras aliquet in dolor. Urna adipiscing ut suspendisse suspendisse malesuada volutpat quis donec.
  Lorem ipsum dolor sit amet consectetur. Vitae quis suspendisse pretium scelerisque vitae. Et mauris augue libero quam dictum. Mauris nisl cras aliquet in dolor. Urna adipiscing ut suspendisse suspendisse malesuada volutpat quis donec. 
  `;

  const toggleReadMore = () => {
    setExpanded(!expanded);
    setAcceptButtonDisabled(!expanded);
  };

  return (
    <ImageBackground
      source={BackgroundImage}
      style={globalStyles.backgroundImage}
    >
      <TopComp
        heading="Agreement"
        secondHeading="Terms and Conditions"
        barImage={screenBar}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: "20.2%", width: "100%" }}
      >
        <View style={styles.lowerComp}>
          <View style={styles.termsContainer}>
            <ScrollView style={{ maxHeight: expanded ? null : 200 }}>
              <Text style={styles.termsText}>{termsAndConditions}</Text>
            </ScrollView>
            {!expanded && (
              <Text style={styles.readMoreButton} onPress={toggleReadMore}>
                Read More
              </Text>
            )}
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>
              Download Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={globalStyles.btn}>
        <Button
          Text="Accept and Continue"
          disabled={acceptButtonDisabled}
          style={{ backgroundColor: "#000000" }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  lowerComp: {
    marginTop: 5,
    alignItems: "center",
  },
  termsContainer: {
    width: 360,
    backgroundColor: "transparent",
  },

  termsText: {
    color: "#616161",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left", // Align text to the left
  },
  readMoreButton: {
    color: "#009BDF",
    fontWeight: "500",
    fontSize: 14,
    marginTop: 12,
  },
  downloadButton: {
    marginTop: 12,
  },
  downloadButtonText: {
    textDecorationLine: "underline",
    color: "#009BDF",
    fontWeight: "500",
    fontSize: 14,
    width: 360,
  },
});

export default AgreementPage;
