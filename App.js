import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("First App");

  return (
    <View style={styles.container}>
      <Text style={styles.btn}>{text}</Text>
      <Button title="Button" onPress={() => setText("Button Clicked")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",

    justifyContent: "center",
  },
  btn: {
    borderColor: "red",
    borderWidth: 2,
    padding: 4,
    color: "black",
  },
});
