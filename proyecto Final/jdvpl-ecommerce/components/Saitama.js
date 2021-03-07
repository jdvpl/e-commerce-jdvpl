import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Saitama({ nombre, texto }) {
  return (
    <View style={styles.centro}>
      <View>
        <Text>{nombre}</Text>

        <Image
          style={styles.imagen}
          source={require("../assets/Jiren_render.png")}
        />
      </View>
      <Text
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: 30,
          marginHorizontal: 100,
        }}
      >
        {nombre}
        {texto}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: {
    alignItems: "center",
    alignContent: "center",
  },
  imagen: {
    width: 105,
    height: 145,
  },
  titulo: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
