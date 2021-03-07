import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Clase from "./components/Clase";
import Lol from "./components/Lol";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>JDVPl Basicos</Text>
      <Lol />
      <Clase />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffff",
  },
  letra: {
    color: "#fff",
    fontSize: 30,
    marginHorizontal: "10%",
    textAlign: "center",
  },
});
