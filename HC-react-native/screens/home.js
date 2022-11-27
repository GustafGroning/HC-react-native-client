import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("BasicGame");
  };

  return (
    <View>
      <Text>Home Page</Text>
      <Button title="First game mode (name?)" onPress={pressHandler} />
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
