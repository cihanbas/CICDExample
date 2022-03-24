import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Greetings() {
  const [value, setValue] = useState<string>("");
  const send = () => {
    alert(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
      />
      <Text style={styles.text}>Welcome to CI/CD Example!</Text>
      <Pressable onPress={send} style={styles.btn}>
        <Text style={styles.text}>Send</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    padding: 8,
  },
  textInput: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#42e",

    borderRadius: 8,
  },
});
