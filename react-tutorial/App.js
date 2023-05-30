import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import Navigator from "./routes/homeStack";

export default function App() {
  const [name, setName] = useState("Gustaf");
  const [age, setAge] = useState(30);

  const clickHandler = () => {
    setName("Alba");
    setAge(40);
  };

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
