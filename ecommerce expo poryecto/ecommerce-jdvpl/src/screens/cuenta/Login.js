import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginFormulario from "../../components/LoginFormulario";
import Toast from "react-native-easy-toast";

const Login = () => {
  const navigation = useNavigation();
  const toastref = useRef();
  return (
    <View style={styles.contenedor}>
      <StatusBar backgroundColor="#1976D2" />

      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <Text style={styles.bienvenidos}>Bienvenidos !!</Text>
      <LoginFormulario />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#1976D2",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: "center",
  },
  bienvenidos: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});
