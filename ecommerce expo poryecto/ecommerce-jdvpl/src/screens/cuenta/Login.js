import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginFormulario from "../../components/LoginFormulario";
import Toast from "react-native-easy-toast";

const Login = () => {
  return (
    <View>
      <LoginFormulario />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
