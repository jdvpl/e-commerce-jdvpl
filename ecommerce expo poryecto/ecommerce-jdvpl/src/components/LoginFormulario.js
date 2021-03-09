import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Button, Divider, SocialIcon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validarCorreo } from "../utils/Utils";
import { isEmpty } from "lodash";
import { ScrollView } from "react-native-gesture-handler";

const LoginFormulario = ({ toastref }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const inicarsesion = () => {
    if (isEmpty(email) || isEmpty(password)) {
      toastref.current.show("Debe Ingresar todos los campos");
    } else if (!validarCorreo(email)) {
      toastref.current.show("Por favor debes ingresar un correo correcto");
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.vieww} />

      <Text style={styles.margen}>Iniciar Sesión</Text>
      <Input
        name="email"
        containerStyle={styles.input}
        placeholder="Correo"
        keyboardType="visible-password"
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#0D47A1",
        }}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#0D47A1",
          size: 30,
        }}
      />
      <Input
        name="password"
        containerStyle={styles.input}
        placeholder="Contraseña"
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#0D47A1",
          size: 30,
        }}
        rightIcon={{
          type: "material-community",
          name: "eye-outline",
          color: "#0D47A1",
          onPress: () => alert("Por favor ingresar tu correo electronico"),
        }}
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.Btn}
        buttonStyle={{ backgroundColor: "#0D47A1" }}
        onPress={() => inicarsesion()}
      />
      <Text style={styles.txtcuenta}>
        ¿No tienes cuenta?{" "}
        <Text style={styles.txtCrearCuenta}>{""}Crear cuenta</Text>
      </Text>
      <Divider style={styles.divider1} />
      <Text style={styles.TxtO}>O</Text>

      <View style={styles.VieBTnSocuiales}>
        <TouchableOpacity style={styles.btnsociales}>
          <SocialIcon
            size={44}
            type="google"
            color="black"
            iconColor="#fff"
            title="Sign In With Facebook"
            backgroundColor="#fff"
            raised={true}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsociales}>
          <SocialIcon
            size={24}
            type="material-community"
            type="facebook"
            color="yellow"
            backgroundColor="#fff"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.VieBTnSocuiales}>
        <Text style={styles.txtSociales}>Google</Text>
        <Text style={styles.txtSociales}>Facebook</Text>
      </View>
    </View>
  );
};

export default LoginFormulario;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#f5f6f8",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 30,
  },
  margen: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  vieww: {
    borderBottomColor: "#0D47A1",
    borderBottomWidth: 3,
    width: 140,
  },
  divider1: {
    backgroundColor: "#0D47A1",
    height: 1,
    width: "85%",
    marginTop: 20,
  },
  input: {
    width: "85%",
    marginTop: 10,
    height: 60,
  },
  Btn: {
    marginTop: 20,
    width: "85%",
  },
  txtcuenta: {
    marginTop: 20,
  },
  txtCrearCuenta: {
    color: "#0D47A1",
    fontFamily: "Roboto",
    fontSize: 15,
  },
  TxtO: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    color: "#0D47A1",
  },
  VieBTnSocuiales: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  txtSociales: {
    color: "#0D47A1",
    textAlign: "center",
  },
});
