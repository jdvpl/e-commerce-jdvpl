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
  return <Stack.Navigator></Stack.Navigator>;
}

const styles = StyleSheet.create({});
