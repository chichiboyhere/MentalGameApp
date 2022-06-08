import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const IndexScreen = () => {
  const [timeIn, setTimeIn] = useState("");
  const [tableIn, setTableIn] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const goToTimer = () => {
    navigation.navigate("MentalGameScreen", {
      timeIn,
      tableIn,
    });
    setTableIn("");
    setTimeIn("");
  };

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <ScrollView style={styles.modalContent}>
          <Text style={{backgroundColor: '#FFA501', color: 'white', fontSize: 21, margin: 20, padding: 14}}>
            The Mental Game is a multiplication game. You are required to enter
            a multiplication limit and also the duration of time(in seconds) you
            wish to play for. Say you enter a table limit of '5', then you will
            only be tested on multiplication tables ranging from 1 to 5. Only
            after you have filled the time and table input fields will the
            'Start' button be enabled. Then upon starting the game you will be
            flashed a multiplication problem. You are to enter the answer in the
            input field provided and hit the 'enter' button. If your input is
            correct you earn a score. Otherwise you lose a score. The questions
            will keep flashing on the screen until the timer runs down to zero.
            Then you will be navigated to your 'Result' screen
          </Text>
        </ScrollView>
        <MaterialIcons
          name="close"
          size={24}
          style={{ ...styles.modalToggle, ...styles.modalClose }}
          onPress={() => setIsModalVisible(false)}
        />
      </Modal>

      <Text style={styles.title}>Welcome To Mental Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Time in seconds"
        keyboardType="numeric"
        value={timeIn}
        onChangeText={(text) => {
          setTimeIn(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Table Limit"
        keyboardType="numeric"
        value={tableIn}
        onChangeText={(text) => {
          setTableIn(text);
        }}
      />
      <Button
        disabled={tableIn.length == 0 || timeIn.length == 0 ? true : false}
        title="Start"
        onPress={goToTimer}
      />
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.howToPlay}
      >
        <Text style={styles.toPlay}>How to Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: "#a892ee",*/
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    borderColor: "green",
    
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blue",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    marginVertical: 15,
    color: "#000",
    width: "75%",
    padding: 10,
    borderRadius: 20,
    fontSize: 18,
    borderColor: "#40005d",
    textAlign: "center"
  },
  howToPlay: {
    width: "75%",
    backgroundColor: "#FFA501",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    margin: 12,
  },
  toPlay: {
    color: "white",
    fontSize: 18,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    borderColor: 'black'
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#030303",
    borderColor: 'black'
  },
});

export default IndexScreen;
