import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Perfil from "../screens/profile/Perfil";

const Stack = createStackNavigator();
const PerfilStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Perfil}
        name="perfi"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PerfilStack;

const styles = StyleSheet.create({});
