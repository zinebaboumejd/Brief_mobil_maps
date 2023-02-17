import { StatusBar } from "expo-status-bar";
import { Children, Component } from "react";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import axios from "axios";

export default function Register() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigation();
    const [data, setData] = useState([
        {
            nom: "nom",
            prenom: "prenom",
            email: "email",
            password: "password",
        },
    ]);

    const handleSubmit = () => {
        setLoading(true);
        axios({
            method: "post",
            url: "http://localhost:6060/auth/register",
            data: {
                nom: nom,
                prenom: prenom,
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
                navigation.navigate("Login");
            }
            )
            .catch((err) => {
                setLoading(false);
                console.log(err);
            }
            );

    };
ComponentWillMount=()=>{
    this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this._keyboardDidHide,
    ); 
}
ComponentWillUnmount=()=>{
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
}
_keyboardDidShow=()=>{
    scrollView.scrollTo({y:220,animation:true});
    // this.setState({heightTop:260})
};
_keyboardDidHide=()=>{
    this.setState({keyboardVisible:false})
};





  return (
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <ScrollView
        ref={(ref)=>(scrollView=ref)}
            contentContainerStyle={{ flex: 1 }}
            bounces={false}  //click => desactiver clavie
        >

    <View style={[styles.container]}>
 
<Text style={styles.Header}>Login</Text>
      <Text style={styles.description}>description</Text>
    
    
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nom</Text>
        
        <TextInput
            style={styles.input}
            value={nom}
            onChangeText={setNom}
            placeholder="Nom"
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>

        <View
        style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Prenom</Text>
        <TextInput
            style={styles.input}
            value={prenom}
            onChangeText={setPrenom}
            placeholder="Prenom"
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>


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
            // type password
            secureTextEntry={true}
            />
      </View>
    <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        >
        <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
   
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
