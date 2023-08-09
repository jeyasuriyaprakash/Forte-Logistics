import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Card, Paragraph, List } from "react-native-paper";
import { ScrollView } from "react-native";
import { Animated } from "react-native";
import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Firstpage({ navigation }) {
  const [showmenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const Scale = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#134c3e" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: 60,
              width: 60,
              marginTop: 50,
              marginLeft: 20,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 1,
            }}
            source={require("../../assets/avather.jpg")}
          />
          <Text
            style={{
              marginTop: 65,
              marginLeft: 20,
              fontSize: 25,
              color: "#fff",
            }}
          >
            Welcome
          </Text>
          {/* <Appbar.Action style={{marginTop:60,marginLeft:50}} icon="menu" size={30} color={'#fff'}  onPress={() => {}} /> */}
        </View>
        <ScrollView>
          <View style={{ marginTop: 50, marginLeft: 30 }}>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 20, color: "#fff", marginBottom: 40 }}
                onPress={() => navigation.navigate("Getquote")}
              >
                SET MASTER DATA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                CUSTOMER VIEW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                INTERNAL VIEW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                TOOLS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                COMPANY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                BILL OF LANDING
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                OPERATIONS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                SALES
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                WMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}>
                REPORT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 20, marginBottom: 40, color: "#fff" }}
                onPress={() => navigation.navigate("Mylogin")}
              >
                Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, marginBottom: 40, color: "#fff" }}>
                Version 1.0
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: [{ scale: Scale }, { translateX: moveToRight }],
          justifyContent: "space-between",
        }}
      >
        <Appbar.Header
          style={{ backgroundColor: "white", justifyContent: "space-between" }}
        >
          <Appbar.Action
            style={{ marginLeft: 20 }}
            onPress={() => {
              Animated.timing(Scale, {
                toValue: showmenu ? 1 : 1,
                duration: 300,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showmenu ? 0 : 270,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showmenu);
            }}
            icon="menu"
            size={30}
            color={"#134c3e"}
          />
          <List.Image
            size={70}
            source={require("../../assets/spla.jpg")}
            style={{ padding: 40 }}
          />
          <Appbar.Action
            icon="bell-badge-outline"
            size={30}
            color={"#134c3e"}
            onPress={() => {}}
            style={{ marginLeft: 10 }}
          />
        </Appbar.Header>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView>
          <View>
            <View style={{ flex: 1, margin: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Secandpage")}
              >
                <Card
                  style={{
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 20,
                  }}
                >
                  <Card.Cover
                    style={styles.cardImgalin}
                    source={require("../../assets/rate.png")}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      color: "#a4745b",
                      marginBottom: 10,
                    }}
                    onPress={() => navigation.navigate("Secandpage")}
                  >
                    ReQuest a Rate Quote
                  </Text>
                  <Paragraph style={{ fontSize: 13, textAlign: "left" }}>
                    Request a Quickie Quote (minimal information required),or
                    request a Full Quote (more information required).
                  </Paragraph>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, margin: 15 }}>
              <Card
                style={{ alignItems: "center", borderRadius: 10, padding: 20 }}
              >
                <Card.Cover
                  style={styles.cardImgalin}
                  source={require("../../assets/bill.png")}
                />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#a4745b",
                    marginBottom: 10,
                  }}
                >
                  Create a Bill of Lading
                </Text>
                <Paragraph style={{ fontSize: 13, textAlign: "left" }}>
                  Create a Bill of Landing that can be printed or downloaded as
                  a PDF.
                </Paragraph>
              </Card>
            </View>
            <View style={{ flex: 1, margin: 15 }}>
              <Card
                style={{ alignItems: "center", borderRadius: 10, padding: 20 }}
              >
                <Card.Cover
                  style={styles.cardImgalin}
                  source={require("../../assets/template.png")}
                />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#a4745b",
                    marginBottom: 10,
                  }}
                >
                  Templates
                </Text>
                <Paragraph style={{ fontSize: 13, textAlign: "left" }}>
                  Templates are re-usable groups of information that can be used
                  to auto-fill certain sections in your forms.
                </Paragraph>
              </Card>
            </View>
            <View style={{ flex: 1, margin: 15 }}>
              <Card
                style={{ alignItems: "center", borderRadius: 10, padding: 20 }}
              >
                <Card.Cover
                  style={styles.cardImgalin}
                  source={require("../../assets/claim.png")}
                />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#a4745b",
                    marginBottom: 10,
                  }}
                >
                  Cargo Claims
                </Text>
                <Paragraph style={{ fontSize: 13, textAlign: "left" }}>
                  Download FedEx and YRC Cargo Claim forms as PDFs. Also
                  contains phone numbers for the FedEx and YRC Cargo Claim
                  Departments.
                </Paragraph>
              </Card>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardImgalin: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    marginLeft: "35%",
    margin: 5,
  },
});
