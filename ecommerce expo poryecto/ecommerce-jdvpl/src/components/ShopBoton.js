import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ShopBoton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={estilos.ShopBoton}
      onPress={() => {
        navigation.navigate("mitienda");
      }}
    >
      <Icon name="store" color="#fff" size={30} />
    </TouchableHighlight>
  );
};

export default ShopBoton;

const estilos = StyleSheet.create({
  ShopBoton: {
    backgroundColor: "#0c7cbc",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    top: -20,
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff",
  },
});
