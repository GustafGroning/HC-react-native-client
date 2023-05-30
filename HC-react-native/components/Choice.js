import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const NameData = require("../files/names");
const VerbData = require("../files/verbs");
const AdjectiveData = require("../files/adjectives");

const NameList = NameData["names"];
const VerbList = VerbData["verbs"];
const AdjectiveList = AdjectiveData["adjectives"];

const randomChoice = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const Choice = () => {
  const [RandomName, setRandomName] = useState(() => randomChoice(NameList));

  const [RandomVerb, setRandomVerb] = useState(() => randomChoice(VerbList));
  const [RandomAdjective, setRandomAdjective] = useState(() =>
    randomChoice(AdjectiveList)
  );

  return (
    <>
      <View className="stock-container">
        <Text>
          {RandomVerb["verb"]} with {RandomAdjective["adjective"]}{" "}
          {RandomName["name"]}
        </Text>
      </View>
    </>
  );
};
