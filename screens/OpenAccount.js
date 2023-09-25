import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "../assets/OpenAccountImages/backgroundImageOpenAccount.png";
import Button from "../components/Button.js";
const OpenAccount = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.backgroundImage}>
        <View>
          <Image
            source={require("../assets/OpenAccountImages/OpenAccountlogo.png")}
            style={styles.logoImage}
          />

          <Image
            source={require("../assets/OpenAccountImages/OpenAccountComputer.png")}
            style={styles.computerImage}
          />
        </View>
        <Text style={styles.heading}>SEAMLESS ACCOUNT OPENING</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Dis ac amet scelerisque morbi
          condimentum
        </Text>
        <View style={styles.OpenBankAccountContainer}>
          <Button
            style={styles.OpenBankAccountContainer}
            Text={"Open Bank Account"}
            Navigate={"Registration"}
          />
        </View>
        <View style={styles.ReviewContainer}>
          <Button
            style={styles.ReviewContainer}
            Text={"Review Your Application"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logoImage: {
    width: 307,
    height: 85.22,
    marginTop: 75,
  },
  computerImage: {
    width: 285,
    height: 240,
    marginTop: 30,
  },
  backgroundImage: {
    height: "100%",
    width: "101%",
    height: "103%",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    lineHeight: 26.63,
    fontWeight: "700",
    marginTop: 40,
  },
  paragraph: {
    fontWeight: "400",
    lineHeight: 18.15,
    textAlign: "center",
    fontSize: 16,
    width: 307,
    height: 78,
  },
  OpenBankAccountContainer: {
    marginTop: 57,
  },
  ReviewContainer: {
    marginTop: 25,
  },
  buttonText: {
    color: "white", // Set the text color to white for better contrast
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default OpenAccount;
