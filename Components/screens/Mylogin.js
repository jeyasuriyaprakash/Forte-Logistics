import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
import { user_login } from "../../api/user_api";
import Eye from "../../asset/Eye.png";
import EyeActive from "../../asset/EyeActive.png";

export default function Mylogin({ navigation }) {
  //const{login}=useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    let username = "Bbuchanan";

    setEmail(text);
    if (username === "Bbuchanan") {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        email: email,
        password: password,
      })
        .then((result) => {
          console.log(result);
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            setEmail("");
            setPassword("");
            navigation.navigate("Regester");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };
  const handleCustomer = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        email: email,
        password: password,
      })
        .then((result) => {
          console.log(result);
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            setEmail("");
            setPassword("");
            navigation.navigate("Firstpage");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };
  const handleError = () => {
    console.log("error");
  };

  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <Image
            style={styles.image}
            source={require("../assets/forte_logo.png")}
          />
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 30,
              paddingRight: 30,
              textAlign: "center",
              color: "#134C3E",
              fontFamily: "Inter, sans-serif",
              letterSpacing: 2,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Welcome to the Forte Rate Calculation Portal
          </Text>
          <Text
            style={{
              paddingLeft: 100,
              paddingRight: 100,
              color: "#rgb(207,208,209)",
              fontSize: 12,
              letterSpacing: 1,
              marginTop: 8,
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            You may Sign in by using the credential provided to you by Forte{" "}
          </Text>
          <Text style={styles.emailText}>Email or Username</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="default"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          {checkValidEmail ? (
            <Text style={styles.textFailed}>Wrong format email</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <Text style={styles.emailText}>Password</Text>

          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={seePassword ? Eye : EyeActive}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent:'space-between',
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#134C3E",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    padding: 10,
    width: "85%",
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
  icon: {
    width: 25,
    height: 20,
  },

  emailText: {
    lineHeight: 20,
    color: "#245C52",
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: "Larsseit",
    letterSpacing: 0.05,
    top: 10,
    width: 170,
    height: 33,
    left: 40,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  MTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#134C3E",
    width: "80%",
    marginRight: 8,
    padding: 8,
    letterSpacing: 2,
    marginTop: 30,
  },
  // passwordText: {
  //   lineHeight: 20,
  //   color: '#245C52',
  //   fontSize:18,
  //   fontStyle:'normal',
  //   fontFamily:'Larsseit',
  //   fontWeight:'bold',
  //   letterSpacing:0.05,
  //   top:20,
  //   width:170,
  //   height:33,
  //   textAlign:'left',
  //   alignSelf:'flex-start',
  //   left:40,

  // },
  PTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#134C3E",
    width: "80%",
    marginRight: 8,
    padding: 8,
    letterSpacing: 2,
    marginTop: 20,
  },

  button: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#134C3E",
    borderRadius: 5,
    marginTop: 45,
  },
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    marginTop: 45,
  },
  text: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red",
  },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    //justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "50%",
  },
  image: {
    marginTop: 60,
    alignItems: "center",
    marginBottom: 50,
  },
});
