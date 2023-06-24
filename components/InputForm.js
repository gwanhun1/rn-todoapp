import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const InputForm = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (value !== "" || e.nativeEvent.key === "Enter") {
      dispatch(addTodo(value));
      setValue("");

      inputRef.current.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        ref={inputRef}
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addBtn} onPress={handleSubmit}>
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 42,
    paddingVertical: 10,
    padding: 5,
    marginRight: 25,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "#000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  addBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
