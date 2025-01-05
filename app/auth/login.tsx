import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { router } from "expo-router";
import { BACKEND_URL } from "@env";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password,
      });

      // Handle success response (e.g., store token, navigate, etc.)
      Alert.alert("Success", "Login successful!");
      // You can redirect the user to a different screen on successful login:
      router.push("/pages/appointments");
    } catch (error) {
      Alert.alert(
        "Error",
        error.response?.data?.msg || "Login failed! Please try again.",
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {/* Link to Forget Password */}
      <TouchableOpacity onPress={() =>  router.push("/auth/forget_password")}>
        <Text style={styles.forgotPasswordText}>
          Have you forgotten your password? Click here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    color: "blue",
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    width: "90%",
    padding: 12,
    marginVertical: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  loginButton: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "grey",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
  },
});
