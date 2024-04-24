import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, gql } from "@apollo/client";

const AUTH_TOKEN = "auth-token";

const Login = () => {
  const navigate = useNavigation();
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
      console.log("Logged in!");
      // navigate("/");
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
      // navigate("/");
    },
  });

  return (
    <View>
      <Text>{formState.login ? "Login" : "Sign Up"}</Text>
      <View>
        {!formState.login && (
          <TextInput
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
          value={formState.password}
          onChangeText={(e) =>
            setFormState({
              ...formState,
              password: e,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => (formState.login ? login() : signup())}
        >
          {formState.login ? <Text>login</Text> : <Text>create account</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          {formState.login ? (
            <Text>need to create an account?</Text>
          ) : (
            <Text>already have an account?</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
