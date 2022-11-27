import { nameList } from "../files/names";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const NameData = require("../files/names");
const NameList = NameData["names"];
console.log(NameData);
console.log(NameList);

export const Names = () => {
  return (
    <>
      <View className="stock-container">
        {NameList.map((data, key) => {
          return <Text key={key}>{data.name}</Text>;
        })}
      </View>
    </>
  );
};
