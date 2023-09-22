import { ImageBackground, StyleSheet } from "react-native";
import Image from "../assets/BackgroundImage/backgroundImage.png";
const BackgroundImage = () => {
  return <ImageBackground source={Image} style={styles.image} />;
};
const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
});
export default BackgroundImage;
