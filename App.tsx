import { StyleSheet, Text, TextInput, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TextInput value="Cihan BAS" style={styles.textInput} />
      <Text style={styles.text}>Welcome to CI/CD Example!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42b",
    alignItems: "center",
    padding: 15,
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
