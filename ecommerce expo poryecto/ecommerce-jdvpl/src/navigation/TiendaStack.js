import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Tienda from "../screens/tienda/Tienda";
import AgregarProducto from "../screens/tienda/AgregarProducto";
import Contacto from "../screens/tienda/Contacto";
import Detalle from "../screens/tienda/Detalle";
import Mensajes from "../screens/tienda/Mensajes";

const Stack = createStackNavigator();

export default function TiendaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Tienda}
        name="tienda"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={AgregarProducto}
        name="agregarproducto"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#007aff" },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        component={Detalle}
        name="detalle"
        options={{
          headerTransparent: true,
          headerTintColor: "#007aff",
          title: "",
        }}
      />

      <Stack.Screen
        component={Mensajes}
        name="mensajes"
        options={{
          headerTransparent: true,
          headerTintColor: "#007aff",
          title: "Mensajes",
        }}
      />

      <Stack.Screen
        component={Contacto}
        name="contacto"
        options={{
          headerTransparent: true,
          headerTintColor: "#007aff",
          title: "Contacto",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
