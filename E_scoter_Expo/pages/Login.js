import { StatusBar } from "expo-status-bar";
import { Children } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [arg, setArg] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
const [erroe,setError]=useState("")
  const handleSubmit = () => {
    setLoading(true);
    axios({
      method: "post",
      url: "http://192.168.9.46:6060/auth/login",
      // url:"127.0.0.1:6060/auth/login",
      data: {
        email: email,
        password: password,
      },

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        navigation.navigate("Meteo");
      }
      )
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(err.response.data.message)
      }
      );

  };
  return (
    <View style={[styles.container]}>
      {/* <ImageBackground source={require("../assets/image1.jpg")}  style={{ width: "100%", height: "100%" }}> */}

      <Text style={styles.Header}>Login</Text>
      <Text style={styles.description}>description</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true} //.... type=password
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          value={arg}
          onValueChange={() => setArg(!arg)}
          color={arg ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>Remember me</Text>
      </View>
      {/* :navigatio Home */}

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: arg ? "#4630EB" : "#D1D1D1" },
        ]}
        disabled={!arg}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  Header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  wrapperText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#4630EB",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },
});
