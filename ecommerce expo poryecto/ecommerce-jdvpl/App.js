import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>JDVPl Basicos</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007aff",
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
