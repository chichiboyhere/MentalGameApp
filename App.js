import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { LogBox } from "react-native";
import ResultScreen from "./src/screens/ResultScreen";
import MentalGameScreen from "./src/screens/MentalGameScreen";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#006400",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="MentalGameScreen" component={MentalGameScreen} />
        <Stack.Screen name="Result" component={ResultScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
