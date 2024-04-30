import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, gql } from "@apollo/client";
import MyContext from "../Context/MyContext";

const AUTH_TOKEN = "auth-token";
import Colors from "../components/Colors";

const Login = () => {
  const { SetToken, SetUser } = useContext(MyContext);
  const navigation = useNavigation();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $name: String!
    ) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `;

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          email
          id
          name
        }
      }
    }
  `;

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      //   localStorage.setItem(AUTH_TOKEN, login.token);
      console.log("userlogin", login);
      if (login.token) {
        SetToken(login.token);
        SetUser(login.user);
      }
      console.log("Logged in!");
      navigation.navigate("Home");
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      //   localStorage.setItem(AUTH_TOKEN, signup.token);
      console.log("Signed up!");
      navigation.navigate("Home");
    },
  });

  return (
    <View style={styles.box}>
      <Image
        // source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image URL
        source={require("../../assets/splash.png")} // Placeholder image URL
        style={styles.profileImage}
      />
      <Text style={styles.title}>{formState.login ? "Login" : "Sign Up"}</Text>
      {!formState.login && (
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          value={formState.name}
          onChangeText={(e) =>
            setFormState({
              ...formState,
              name: e,
            })
          }
          placeholder="Your name"
        />
      )}
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={formState.email}
        onChangeText={(e) =>
          setFormState({
            ...formState,
            email: e,
          })
        }
        placeholder="Your email address"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={formState.password}
        onChangeText={(e) =>
          setFormState({
            ...formState,
            password: e,
          })
        }
        secureTextEntry
        placeholder="Choose a safe password"
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => (formState.login ? login() : signup())}
      >
        {formState.login ? <Text>Login</Text> : <Text>Sign Up</Text>}
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={(e) =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          {formState.login ? (
            <Text style={styles.subheading}>Need to create an account?</Text>
          ) : (
            <Text style={styles.subheading}>Already have an account?</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { width: "100%", alignItems: "center", justifyContent: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.teal,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
  },

  input: {
    height: 40,
    width: "100%",
    borderColor: Colors.gray,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGray,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width and height for circular shape
    marginBottom: 20,
  },
  btn: {
    // position: "absolute",
    // top: 20,
    // right: 20,
    alignSelf: "center", // Center horizontally
    backgroundColor: Colors.brown,
    width: 100,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "auto",
  },
});

export default Login;
