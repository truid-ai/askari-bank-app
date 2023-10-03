import React, { useState } from "react";
import { ImageBackground, Modal, View } from "react-native";
import BackgroundImage from "../assets/BackgroundImage/backgroundImage.png";
import { TopComp } from "../components/TopComp.js";
import ScreenBar from "../assets/InformationReview/screenBar.png";
import { globalStyles } from "../styles";
import ConfirmationComp from "../components/ConfirmationComp.js";
import Button from "../components/Button";
import ReviewModal from "./ReviewModal";

const InformationReview = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const toggle = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <ImageBackground
      source={BackgroundImage}
      style={[globalStyles.backgroundImage]}
    >
      <View style={{ flex: 1 }}>
        <TopComp
          heading="Information Review"
          secondHeading="Information Review"
          barImage={ScreenBar}
        />

        {/* Your content goes here */}
        <ConfirmationComp
          arr={["Info 1", "Info 1", "Info 1", "Info 1"]}
          shape={"square"}
        />

        {/* Semi-transparent black overlay */}
        {/* <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black background
            position: "relative",
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        /> */}

        <View style={globalStyles.btn}>
          <Button Text={"Submit Application"} func={toggle} />
        </View>
        <ReviewModal modalToggle={modalToggle} />
      </View>
    </ImageBackground>
  );
};

export default InformationReview;
