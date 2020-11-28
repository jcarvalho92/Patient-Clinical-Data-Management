import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, TextInput, Image} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'
import * as api from '../resource/api'

function AddRecordScreen({navigation}) {
    const [patientID, setPatientID] = React.useState('');
    const [bloodPressure, setBloodPressure] = React.useState('');
    const [respiratoryRate, setRespiratoryRate] = React.useState('');
    const [bloodOxygen, setBloodOxygen] = React.useState('');
    const [heartbeatRate, setHeartbeatRate] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [temperature, setTemperature] = React.useState('');
    const [checked, setChecked] = useState(-1);
    var statusOption = ['Normal', 'Critical'];
    const [status, setStatus] = React.useState('');
    var today = new Date();
    date = parseInt(today.getMonth()+1) + "/"+ today.getDate() +"/"+ today.getFullYear();

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
          onChangeText={(patientID) => setPatientID(patientID)}
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
          placeholder="Temperature (Celsius)" placeholderTextColor= {colors.light}
          onChangeText={(temperature) => setTemperature(temperature)}
          value={temperature} 
        >
        </TextInput>
      </View>
      
      <View style={styles.appViewRadio}>
        <View style={styles.appViewRadioButton}>
          <Text style={{color: colors.light}}>Status: </Text>
          
            {statusOption.map((statusOption, key) => {
              return (
                <View key={statusOption}>
                  {checked == key ? (
                   <TouchableOpacity style={styles.appViewRadioButton}>
                     <Image
                       style={styles.appImageRadio}
                       source={require('../assets/images/radio_checked.png')}
                     />
                     <Text style={{color: colors.light}}>{statusOption}</Text>
                   </TouchableOpacity>
                 ) : (
                   <TouchableOpacity
                     onPress={() => {
                        setChecked(key);
                        setStatus(statusOption);
                      }}
                      style={styles.appViewRadioButton}>
                      <Image
                        style={styles.appImageRadio}
                        source={require('../assets/images/radio_unchecked.png')}
                      />
                      <Text style={{color: colors.light}}>{statusOption}</Text>
                    </TouchableOpacity>
                 )}
               </View>
              );
            })}
          </View>
      </View>

      <View style={styles.appViewButton}>
        <TouchableOpacity style={styles.appButtonContainer}  activeOpacity={0.5}  
        onPress={() => 
          api.sendPatientRecordDataToApi(date, patientID,bloodPressure, respiratoryRate, bloodOxygen, heartbeatRate,weight,height,temperature, status)
        } >
            <Text style={styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>

    );
}

export default AddRecordScreen;