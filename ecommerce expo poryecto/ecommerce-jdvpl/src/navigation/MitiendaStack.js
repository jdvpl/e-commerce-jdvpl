import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Mitienda from "../screens/MiTienda/Mitienda";
import EditarProducto from "../screens/MiTienda/EditarProducto";

const Stack = createStackNavigator();

const MitiendaStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#007aff" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={Mitienda}
        name="mitienda"
        options={{
          title: "Mi Tienda",
        }}
      />

      <Stack.Screen
        component={EditarProducto}
        name="editar"
        options={{
          title: "Editar Porducto",
        }}
      />
    </Stack.Navigator>
  );
};

export default MitiendaStack;

const styles = StyleSheet.create({});
