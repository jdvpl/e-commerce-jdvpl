import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginFormulario = () => {
  return (
    <View>
      <Text style={styles.margen}>Formulario de kisama</Text>
    </View>
  );
};

export default LoginFormulario;

const styles = StyleSheet.create({
  margen: {
    margin: 45,
    textAlign: "center",
  },
});
