import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASEURL, Login, CSRFTOKEN, csrf_token } from "../../services/Baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../app/features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [csrftoken, setCsrfToken] = useState("");
  const [jwttoken, setJwtToken] = useState("");
  const [is_driver, setIsDriver] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token_redux = useSelector((state) => state.auth.token);
  const username_redux = useSelector((state) => state.auth.username);

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await axios.get(BASEURL + CSRFTOKEN);
        const token = res.data.csrfToken;
        setCsrfToken(token);
      } catch (err) {
        console.error("Error getting CSRF token: ", err);
        setError("Failed to get CSRF token");
      }
    };
    getToken();
  }, []);

  const handleLogin = async () => {
    try {
      const users = {
        username,
        password,
      };
      const token = csrftoken;
      const response = await axios.post(BASEURL + Login, users, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": token,
        },
      });
      try {
        const loginData = {
          token: response.data.token,
          username: response.data.username,
        };
        await AsyncStorage.setItem("loginData", JSON.stringify(loginData));
        setJwtToken(response.data.token);
        setUsername(response.data.username);
        setIsDriver(response.data.is_driver);
        dispatch(
          login({ token: jwttoken, username: username, csrf_token: csrftoken, is_driver: is_driver})
        );

        console.log("=============================================");
        console.log("redux state token", token_redux);
        console.log("=============================================");

        // console.log("redux state username ", username_redux);
        // console.log("=============================================");
      } catch (err) {
        console.error("Login token error: ", err);
        setError("Failed to store login data");
      }
    } catch (err) {
      console.error("Login Error: ", err);
      setError("Failed to login");
    }

    if (is_driver) {
      console.log("is_driver in login page", is_driver);
      navigation.navigate("Home");
    } else {
      console.log("is_not_driver in login page", is_driver);
      navigation.navigate("PassengerHomeScreen");
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>nepaMove</Text>
      <Text style={styles.text}>Login Page!!</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />
      </View>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5FCFF", // Light background color
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 30,
    textAlign: "center", // Center the title
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
    textAlign: "center", // Center the title
  },

  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    maxWidth: "100%", // Ensure full width
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#4CAF50", // Green button color
    color: "#fff",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  link: {
    fontSize: 14,
    color: "#333",
    textAlign: "center", // Center the link
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginScreen;
