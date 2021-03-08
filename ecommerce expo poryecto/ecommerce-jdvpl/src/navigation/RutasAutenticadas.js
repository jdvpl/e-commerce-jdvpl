import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MitiendaStack from "./MitiendaStack";
import ShopBoton from "../components/ShopBoton";
// aqui algunos componentes

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="tienda"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#007aff",
          paddingBottom: 5,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => mostarIcono(route, color),
      })}
    >
      <Tab.Screen
        component={TiendaStack}
        name="tienda"
        options={{ title: "Tienda" }}
      />

      <Tab.Screen
        component={MitiendaStack}
        name="mitienda"
        options={{ title: "", tabBarIcon: () => <ShopBoton /> }}
      />

      <Tab.Screen
        component={PerfilStack}
        name="cuenta"
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

function mostarIcono(route, color) {
  let iconName = "";
  switch (route.name) {
    case "tienda":
      iconName = "cart-outline";
      break;
    case "cuenta":
      iconName = "account-circle-outline";
      break;
    case "mitienda":
      iconName = "cart-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
}
const RutasAutenticadas = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};

export default RutasAutenticadas;

const styles = StyleSheet.create({});
