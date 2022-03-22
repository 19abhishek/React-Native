import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("First App");

  return (
    <View style={{ padding: 50, marginTop: 30 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput placeholder="Add Todo" style={styles.textField} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
  },
});
