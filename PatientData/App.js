import "react-native-gesture-handler"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import LogInScreen from "./app/screens/LogInScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AddPatientScreen from "./app/screens/AddPatientScreen";
import ViewPatientScreen from "./app/screens/ViewPatientScreen";
import SearchPatientScreen from "./app/screens/SearchPatientScreen";
import ViewAllPatientsScreen from "./app/screens/ViewAllPatientsScreen";
import AddRecordScreen from "./app/screens/AddRecordScreen";
import ViewRecordScreen from "./app/screens/ViewRecordScreen";
import SearchRecordScreen from "./app/screens/SearchRecordScreen";


const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen name ="Log In" component={LogInScreen} />
      <Stack.Screen name ="Home" component={HomeScreen} />
      <Stack.Screen name ="Add Patient" component={AddPatientScreen} />
      <Stack.Screen name ="Search Patient" component={SearchPatientScreen} />
      <Stack.Screen name ="Search Record" component={SearchRecordScreen} />
      <Stack.Screen name ="View Patient" component={ViewPatientScreen} />
      <Stack.Screen name ="View All Patient" component={ViewAllPatientsScreen} />
      <Stack.Screen name ="Add Record" component={AddRecordScreen} />
      <Stack.Screen name ="View Record" component={ViewRecordScreen} />
      
  </Stack.Navigator>
)

export default function App(){
  return(
  <NavigationContainer>
     <StackNavigator />
   </NavigationContainer>
   
  )
}
