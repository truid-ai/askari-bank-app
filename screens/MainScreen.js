import { StatusBar } from "expo-status-bar";
import { useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../assets/MainScreenImages/backgroundImageMain.png";

const MainScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const slideAnimation = useRef(new Animated.Value(screenWidth)).current;
  const slideAnimationDesign = useRef(new Animated.Value(-200)).current;
  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 0, // Animate to the final position (0)
      duration: 700, // Duration of the animation in milliseconds
      useNativeDriver: true, // Set this to true if possible for better performance
    }).start();
    Animated.timing(slideAnimationDesign, {
      toValue: 0, // Animate to the final position (0)
      duration: 700, // Duration of the animation in milliseconds
      useNativeDriver: true, // Set this to true if possible for better performance
    }).start();
    const timer = setTimeout(() => {
      // Navigate to the second screen after 3 seconds
      navigation.navigate("OpenAccount");
    }, 5000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={Background} style={styles.backgroundImage}>
        <Animated.View
          style={[
            styles.imageContainer,
            { transform: [{ translateX: slideAnimationDesign }] },
          ]}
        >
          <Image
            source={require("../assets/MainScreenImages/designImageMain.png")} // Replace with your image path
            style={styles.designImage}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.imageContainer,
            { transform: [{ translateX: slideAnimation }] },
          ]}
        >
          <Image
            source={require("../assets/MainScreenImages/askaribank.png")} // Replace with your image path
            style={styles.image}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 390,
    position: "absolute",
  },
  image: {
    width: 272,
    height: 150,
  },
  designImage: {
    width: 279,
    height: 714.5,
  },
});
export default MainScreen;
