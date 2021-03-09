import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const LoginFormulario = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.contenedor}>
      <View style={styles.vieww} />
      <Text style={styles.margen}>Iniciar Sesión</Text>

      <Input placeholder="Correo" keyboardType="email-address" />
      <Input placeholder="Contraseña" keyboardType="ascii-capable" />
      <Button title="Iniciar Sesion" />
      <Text>
        ¿No tienes cuenta? <Text>{""}Crear cuenta</Text>
      </Text>

      <Divider style={styles.divider1} />

      <Text>O</Text>

      <View>
        <TouchableOpacity>
          <Icon
            size={24}
            type="material-community"
            name="google"
            color="blue"
            backgroundColor="#f000"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            size={24}
            type="material-community"
            name="facebook"
            color="yellow"
            backgroundColor="#f000"
          />
        </TouchableOpacity>
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
    width: "90%",
    marginTop: 20,
  },
});
