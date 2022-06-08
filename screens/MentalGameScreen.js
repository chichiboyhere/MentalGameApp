import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import CountDown from "react-native-countdown-component";
import { useNavigation, useRoute } from '@react-navigation/native';


const MentalGame = () => {
  const [inputOne, setInputOne] = useState(1);
  const [inputTwo, setInputTwo] = useState(1);
  const [response, setResponse] = useState("");
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
 

  const route = useRoute();
  const time = route.params.timeIn;
  const table = route.params.tableIn;
  const navigation = useNavigation();
 
  const inputKeyPress = () => {
    const answer = response;
    if (answer == inputOne * inputTwo) {
      //Answer is correct
      setScore(score + 1);
      setInputOne(Math.ceil(Math.random() * parseInt(table)));
      setInputTwo(Math.ceil(Math.random() * 12));
      setQuestionCount(questionCount + 1);
      setResponse("");
    } else {
      //Answer is wrong
      setScore(score - 1);
      setResponse("");
    }
  };

  const onFinishCD = () => {
    navigation.navigate('Result', { score, time, questionCount }); 
  };

  const onPressCD = () => {
    Alert.alert("Timer Pressed...");
  };

  return (
    <> 
      <View style={styles.timerContainer}>
        <Text style={styles.timerTitle}>Timer</Text>
        <CountDown
          until={parseInt(time)}
          onFinish={onFinishCD}
          onPress={onPressCD}
          size={20}
        />
      </View>
      <View style={styles.container}>
        <Text>Question: {questionCount}</Text>
        <Text style={{ fontSize: 90, color: "blue", alignItems: "center" }}>
          {inputOne} &times; {inputTwo}
        </Text>
        <Text style={{ fontSize: 20, alignItems: "center" }}>Answer:</Text>
        <TextInput
          onEndEditing={inputKeyPress}
          onChangeText={(text) => setResponse(text)}
          value={response}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text>Score: {score}</Text>
        <Button  onPress={() => navigation.navigate("Home")} title="Cancel" />
      </View>
       
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    marginVertical: 15,
    color: "#000",
    width: "75%",
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center'
  },
  timerContainer: {
    padding: 5,
    alignItems: "center",
  },

  timerTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "green",
    padding: 3,
  },
});
export default MentalGame;
