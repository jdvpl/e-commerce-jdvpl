import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import LoginFormulario from "../../components/LoginFormulario";
import Toast from "react-native-easy-toast";
import { ScrollView } from "react-native";

const Login = () => {
  const toastref = useRef();
  return (
    <View style={styles.contenedor}>
      <StatusBar backgroundColor="#1976D2" />

      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <ScrollView>
        <Text style={styles.bienvenidos}>Bienvenidos !!</Text>
        <LoginFormulario toastref={toastref} />
        <Toast ref={toastref} position="center" opacity={0.9} />
      </ScrollView>
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
