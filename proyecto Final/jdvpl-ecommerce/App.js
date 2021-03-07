import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Saitama from "./components/Saitama";

export default function App() {
  const [texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <View>
          <ScrollView>
            <View>
              <ScrollView horizontal>
                <View style={styles.container}>
                  <Saitama nombre="Jiren" />
                </View>

                <View style={styles.container}>
                  <Saitama nombre="Manuel" />
                </View>
              </ScrollView>
            </View>

            {/* debajo del scrollview  */}

            <View style={styles.container}>
              <Saitama nombre="Manuel" texto="Kisama" />

              <TextInput
                placeholder="Ingresa el nombre"
                onChangeText={(text) => {
                  setTexto(text);
                }}
              />
            </View>

            <View style={styles.container}>
              <Saitama nombre={texto} />
            </View>
          </ScrollView>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
