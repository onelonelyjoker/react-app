import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View, Modal } from "react-native";

function Goalinput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };
  return (
    <Modal visible={props.modal} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonview}>
          <Button
            title="Add goal"
            onPress={() => {
              props.handler(enteredGoal);
              setEnteredGoal("");
            }}
          />
          <Button
            title="Cancel"
            color="red"
            onPress={() => props.cancel(false)}
          ></Button>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 2,
    marginBottom: 10,
  },
  inputcontainer: {
    flex: 1,
    margin: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
export default Goalinput;
