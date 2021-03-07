import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Lol() {
  return (
    <View>
      <Text style={estilos.texico}>Jiren es un marica a la carrera</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  texico: {
    color: "red",
  },
});
