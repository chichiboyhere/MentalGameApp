//import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



const ResultScreen = () => {
    //const [verdict, setVerdict] = useState("");
    const navigation = useNavigation();
    const route = useRoute();
    const timeIn = route.params.time;
    const ScoreIn = route.params.score;
    const questions = route.params.questionCount;
    const speed = (ScoreIn / timeIn).toFixed(2);
    
   
  if (speed >= 0.45) {  
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Time Up</Text>
            <Text style={styles.bodyText}> Your Score: {ScoreIn}/{questions} </Text>
            <Text style={styles.bodyText}> Your Speed: {speed} questions per second</Text>
            <Text style={styles.verdictStyleBest}>Wow, that was quite fast! Good job!</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <Button title = "Save Result" /> 
            <Button onPress ={() => navigation.navigate('Home')} title = "Retake Game" />
            </View>
        </View>
    );
  } 
  
  else if (speed < 0.45 && speed > 0.35) {
    return(
      <View style={styles.container}>
          <Text style={styles.title}>Time Up</Text>
          <Text style={styles.bodyText}> Your Score: {ScoreIn}/{questions} </Text>
          <Text style={styles.bodyText}> Your Speed: {speed} questions per second</Text>
          <Text style={styles.verdictStyleModerate}>Your speed was good. There is room for improvement though!</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <Button title = "Save Result" /> 
          <Button onPress ={() => navigation.navigate('Home')} title = "Retake Game" />
          </View>
      </View>
  );
  }

else {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Time Up</Text>
        <Text style={styles.bodyText}> Your Score: {ScoreIn}/{questions} </Text>
        <Text style={styles.bodyText}> Your Speed: {speed} questions per second</Text>
        <Text style={styles.verdictStyleSlow}>That wasn't fast enough. Try harder, next time!</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
        <Button title = "Save Result" /> 
        <Button onPress ={() => navigation.navigate('Home')} title = "Retake Game" />
        </View>
    </View>
);
} 
}



const styles = StyleSheet.create({
 container:{
   backgroundColor: '#fff',
   alignItems: 'center', 
   flex: 1,
   padding: 5
 },
 title: {
   fontSize: 28,
   fontWeight: 'bold',
   color: 'green',
   marginTop: 50
 },
 bodyText: {
    fontSize: 20
  },
  verdictStyleBest:{
    padding: 10,
    marginVertical: 10,
    fontSize: 17,
    color: "white",
    backgroundColor: 'green'
  },
  verdictStyleSlow:{
    padding: 10,
    marginVertical: 10,
    fontSize: 17,
    color: "white",
    backgroundColor: 'red'
  },
  verdictStyleModerate:{
    padding: 10,
    marginVertical: 10,
    fontSize: 17,
    color: "white",
    backgroundColor: '#FFA501'
  },
  
 
});

export default ResultScreen;
