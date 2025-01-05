import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    code: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const {
      name: firstName,
      lastName,
      email,
      code,
      mobile,
      password,
      confirmPassword,
      role,
    } = formData;

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("https://localhost:5001/register", {
        name: firstName + " " + lastName,
        email,
        password,
        role,
      });

      Alert.alert("Success", response.data.msg || "Registration successful!");
    } catch (error) {
      Alert.alert("Error", error.response?.data?.msg || "Registration failed!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.radioGroup}>
        {["user", "admin"].map((role) => (
          <TouchableOpacity
            key={role}
            style={[
              styles.radioOption,
              formData.role === role && styles.radioOptionSelected,
            ]}
            onPress={() => handleInputChange("role", role)}
          >
            <Text style={styles.radioText}>{role}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleInputChange("firstName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleInputChange("lastName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.codeInput]}
          placeholder="Code"
          value={formData.code}
          onChangeText={(text) => handleInputChange("code", text)}
        />
        <TextInput
          style={[styles.input, styles.mobileInput]}
          placeholder="Mobile no"
          keyboardType="phone-pad"
          value={formData.mobile}
          onChangeText={(text) => handleInputChange("mobile", text)}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: "#f9f9f9",
  },
  radioOptionSelected: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  radioText: {
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  codeInput: {
    flex: 1,
    marginRight: 10,
  },
  mobileInput: {
    flex: 2,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
