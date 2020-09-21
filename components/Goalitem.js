import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goalitem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View>
        <Text style={styles.listview}>{props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listview: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ccc",
  },
});

export default Goalitem;
