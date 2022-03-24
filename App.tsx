import React from "react";
import { StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import Greetings from "./src/components/Greetings";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Greetings></Greetings>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 15,
  },
});
