import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import List from "../assets/List";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      Toast.show({
        type: "success",
        text1: "회원가입 성공",
        text2: `${email}로 가입되었습니다.`,
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
      Alert.alert(
        "회원가입 도중에 문제가 발생했습니다.",
        error.message,
        [{ text: "닫기", onPress: () => console.log("닫기") }],
        { cancelable: true }
      );
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      Alert.alert(
        "로그인 도중에 문제가 발생했습니다.",
        error.message,
        [{ text: "닫기", onPress: () => console.log("닫기") }],
        { cancelable: true }
      );
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("main");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <List />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  inputContainer: { width: "80%", marginTop: 15 },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingvertical: 15,
    height: 50,
    marginTop: 5,
  },
  buttonContainer: {
    width: "50%",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000000",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  buttonText: { color: "white", fontweight: "bold", fontSize: 16 },
  buttonOutlineText: { color: "black", fontweight: "bold", fontSize: 16 },
});
