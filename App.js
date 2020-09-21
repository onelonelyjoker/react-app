import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Goalitem from "./components/Goalitem";
import Goalinput from "./components/Goalinput";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [currentGoal, setcurrentGoal] = useState([]);
  const [modalstate, setmodalstate] = useState(false);
  const display = (Goaldata) => {
    setcurrentGoal((currentGoal) => {
      return [
        ...currentGoal,
        { key: Math.random().toString(), value: Goaldata },
      ];
    });
    setmodalstate(false);
  };
  const delItem = (Goalid) => {
    setcurrentGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== Goalid);
    });
  };
  return (
    <View style={styles.View}>
      <Button
        onPress={() => {
          setmodalstate(true);
        }}
        title="Show/Hide Modal"
      ></Button>
      <Goalinput modal={modalstate} cancel={setmodalstate} handler={display} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={currentGoal}
        renderItem={(data) => (
          <Goalitem
            id={data.item.key}
            onDelete={delItem}
            title={data.item.value}
          />
        )}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    padding: 50,
  },
});
