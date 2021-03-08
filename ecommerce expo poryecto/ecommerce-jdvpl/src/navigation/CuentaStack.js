import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import EnviarConfirmacion from "../screens/cuenta/EnviarConfirmacion";
import ConfirmarNumero from "../screens/cuenta/ConfirmarNumero";

const Stack = createStackNavigator();

const CuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={EnviarConfirmacion}
        name="enviar"
        options={{
          title: "Confirmacion tu numero de telefono",
          headerStyle: { backgroundColor: "#007aff" },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        component={ConfirmarNumero}
        name="confirmar"
        options={{
          title: "Confirmacion tu numero",
          headerStyle: { backgroundColor: "#007aff" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default CuentaStack;

const styles = StyleSheet.create({});
