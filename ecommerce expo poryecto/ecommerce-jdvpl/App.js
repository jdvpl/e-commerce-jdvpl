import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RutasAutenticadas from "./src/navigation/RutasAutenticadas";

export default function App() {
  return <RutasAutenticadas />;
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
