import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, TextInput} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'

function AddRecordScreen({navigation}) {
    const [patientID, setPatientID] = React.useState('');
    const [bloodPressure, setBloodPressure] = React.useState('');
    const [respiratoryRate, setRespiratoryRate] = React.useState('');
    const [bloodOxygen, setBloodOxygen] = React.useState('');
    const [heartbeatRate, setHeartbeatRate] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [temperature, setTemperature] = React.useState('');

    return (
    <SafeAreaView style={styles.appBackground} >
      <View style={styles.appViewButtonTopRight}>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.appViewAddRecord}/>
     <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Patient ID" placeholderTextColor= {colors.light}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Blood Pressure (mm Hg)" placeholderTextColor= {colors.light}
          onChangeText={(bloodPressure) => setBloodPressure(bloodPressure)}
          value={bloodPressure}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Respiratory Rate (breaths per minute)" placeholderTextColor= {colors.light} 
          onChangeText={(respiratoryRate) => setRespiratoryRate(respiratoryRate)}
          value={respiratoryRate}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Blood Oxygen Level (%)" placeholderTextColor= {colors.light}
          onChangeText={(bloodOxygen) => setBloodOxygen(bloodOxygen)}
          value={bloodOxygen}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Heartbeat Rate (beats per minute)" placeholderTextColor= {colors.light}
          onChangeText={(heartbeatRate) => setHeartbeatRate(heartbeatRate)}
          value={heartbeatRate}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Weight (Kg)" placeholderTextColor= {colors.light}
          onChangeText={(weight) => setWeight(weight)}
          value={weight} 
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Height (Cm)" placeholderTextColor= {colors.light}
          onChangeText={(height) => setHeight(height)}
          value={height} 
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Temperature (Celcius)" placeholderTextColor= {colors.light}
          onChangeText={(temperature) => setTemperature(temperature)}
          value={temperature} 
        >
        </TextInput>
      </View>
      <View style={styles.appViewButton}>
        <TouchableOpacity style={styles.appButtonContainer}  activeOpacity={0.5}  onPress={() => navigation.navigate("View Record")} >
            <Text style={styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>

    );
}

export default AddRecordScreen;