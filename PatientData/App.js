import "react-native-gesture-handler"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import LogInScreen from "./app/screens/LogInScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AddPatientScreen from "./app/screens/AddPatientScreen";


const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen name ="Log In" component={LogInScreen} />
      <Stack.Screen name ="Home" component={HomeScreen} />
      <Stack.Screen name ="Add Patient" component={AddPatientScreen} />
  </Stack.Navigator>
)

export default function App(){
  return(
  <NavigationContainer>
     <StackNavigator />
   </NavigationContainer>
   
  )
}
