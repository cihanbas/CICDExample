import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Greetings() {
  const [value, setValue] = useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
      />
      <Text style={styles.text}>Welcome to CI/CD Example!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 23,
  },
  textInput: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    fontSize: 15,
  },
});
