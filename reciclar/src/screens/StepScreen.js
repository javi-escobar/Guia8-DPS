import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const StepScreen = ({ step, description, image, onNextStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>Paso {step}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Image style={styles.stepImg} source={getImg(image)}></Image>
      <Button title="Siguiente" onPress={onNextStep} />
    </View>
  );
};

// Función para obtener la imagen
const getImg = (img) => {
  switch (img) {
    case "1":
      return require("../../assets/img1.jpg");
    case "2":
      return require("../../assets/img2.jpg");
    case "3":
      return require("../../assets/img3.jpg");
    case "4":
      return require("../../assets/img4.jpg");
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  stepText: {
    fontSize: 24,
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: "center",
    marginBottom: 20,
  },
  stepImg: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});
export default StepScreen;
