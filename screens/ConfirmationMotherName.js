import { ImageBackground, View } from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import { TopComp } from "../components/TopComp.js";
import ScreenBar from "../assets/Confirmation/screenBar.png";
import { globalStyles } from "../styles";
import ConfirmationComp from "../components/ConfirmationComp.js";
import Button from "../components/Button";
const ConfirmationMotherName = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={globalStyles.backgroundImage}
    >
      <TopComp
        heading="Confirmation"
        secondHeading="Select Your Mother’s Maiden Name"
        barImage={ScreenBar}
      />
      <ConfirmationComp
        arr={[
          "Mother Name",
          "Mother Name",
          "Mother Name",
          "Mother Name",
          "Mother Name",
        ]}
        shape={"circle"}
      />
      <View style={globalStyles.btn}>
        <Button Text={"Next"} />
      </View>
    </ImageBackground>
  );
};
export default ConfirmationMotherName;
