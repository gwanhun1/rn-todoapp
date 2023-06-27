import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

const MainScreens = ({ navigation }) => {
  const todos = useSelector((state) => state.todos.todos);
  const todoTasks = todos.filter((item) => item.state === "todo");
  const completeTasks = todos.filter((item) => item.state === "done");
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="default" />
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Todo Apps</Text>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            handleLogout();
          }}
        >
          <Text style={styles.logoutBtnText}>-</Text>
        </TouchableOpacity>
      </View>
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
  logoutBtn: {
    marginBottom: 25,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 42,
    height: 42,
    borderRadius: 4,
  },
  logoutBtnText: { color: "white", fontSize: 15 },
  pageTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
