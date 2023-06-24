import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const MainScreens = () => {
  const todos = useSelector((state) => state.todos.todos);
  const todoTasks = todos.filter((item) => item.state === "todo");
  const completeTasks = todos.filter((item) => item.state === "done");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="default" />

      <Text style={styles.pageTitle}>Todo Apps</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할일</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>"할 일이 없습니다."</Text>
        )}
      </View>
      <View style={styles.seperator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료</Text>
        {completeTasks.length !== 0 ? (
          <FlatList
            data={completeTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>"완료된 일이 없습니다."</Text>
        )}
      </View>

      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  seperator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomcolor: "rgba(0,0,0,0.2)",
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
  listView: {
    flex: 1,
  },
  emptyListText: { flex: 1, textAlign: "center", fontSize: 20, marginTop: 40 },
});
