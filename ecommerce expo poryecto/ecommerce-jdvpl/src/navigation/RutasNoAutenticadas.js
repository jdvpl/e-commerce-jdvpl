import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/cuenta/Login";
import Registro from "../screens/cuenta/Registro";
import RestaurarContrasena from "../screens/cuenta/RestaurarContrasena";

const Stack = createStackNavigator();

const RutasNoAutenticadas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Registro} name="registro" />
        <Stack.Screen component={RestaurarContrasena} name="restaurar" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RutasNoAutenticadas;

const styles = StyleSheet.create({});
