import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Saitama from "./components/Saitama";

export default function App() {
  return (
    <View>
      <View>
        <ScrollView horizontal>
          <View style={styles.container}>
            <Text>Kakaroto</Text>
            <Text>Kakaroto</Text>
            <Text>Kakaroto</Text>
            <Text>Kakaroto</Text>
            <Text>Kakaroto</Text>
            <Text>Kakaroto</Text>
            <Text>Kakaroto es un km</Text>
          </View>
        </ScrollView>
      </View>
      <Saitama nombre="Jiren" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
