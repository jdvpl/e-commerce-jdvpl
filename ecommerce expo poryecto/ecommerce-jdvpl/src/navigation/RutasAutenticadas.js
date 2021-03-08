import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MitiendaStack from "./MitiendaStack";
// aqui algunos componentes

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={TiendaStack}
        name="tienda"
        options={{ title: "Tienda" }}
      />

      <Tab.Screen
        component={MitiendaStack}
        name="mitienda"
        options={{ title: "" }}
      />

      <Tab.Screen
        component={PerfilStack}
        name="cuenta"
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const RutasAutenticadas = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};

export default RutasAutenticadas;

const styles = StyleSheet.create({});
