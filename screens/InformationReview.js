import { ImageBackground, View } from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import { TopComp } from "../components/TopComp.js";
import ScreenBar from "../assets/InformationReview/screenBar.png";
import { globalStyles } from "../styles";
import ConfirmationComp from "../components/ConfirmationComp.js";
import Button from "../components/Button";
const InformationReview = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={globalStyles.backgroundImage}
    >
      <TopComp
        heading="Information Review"
        secondHeading="Information Review"
        barImage={ScreenBar}
      />
      <ConfirmationComp
        arr={["Info 1", "Info 1", "Info 1", "Info 1"]}
        shape={"square"}
      />
      <View style={globalStyles.btn}>
        <Button Text={"Submit Application"} />
      </View>
    </ImageBackground>
  );
};

export default InformationReview;
