import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
// import { Names } from "../files/names";
import { Names } from "../components/Names";
import { Choice } from "../components/Choice";

export default function basicGame({ navigation }) {
  return (
    <View>
      <Text>Would you rather: </Text>
      <Choice />
      <Text>or! </Text>
      <Choice />
    </View>
  );
}
