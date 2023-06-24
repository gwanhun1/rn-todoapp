import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from "../assets/Checkbox.svg";
import Checkedbox from "../assets/Checkedbox.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer}>
      <Pressable
        hitSlop={10}
        style={styles.itemCheckboxBox}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {props.state === "todo" ? (
          <Checkedbox style={styles.itemCheckedboxBox} />
        ) : (
          <Checkbox />
        )}
      </Pressable>

      <Text
        style={[
          styles.itemText,
          props.state === "done" ? styles.itemTextChecked : "",
        ]}
      >
        {props.text}
      </Text>

      <Pressable
        onPress={() => dispatch(deleteTodo(props.id))}
        style={[
          styles.deleteBtn,
          props.state === "done" ? styles.deleteBtnDone : "",
        ]}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckboxBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 6,
    marginRight: 13,
  },
  itemCheckedboxBox: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 20,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteBtn: {
    opacity: 0.8,
  },
  deleteBtnDone: {
    opacity: 0.3,
  },
});
