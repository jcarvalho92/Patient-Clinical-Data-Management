import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, TextInput} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'

function AddRecordScreen({navigation}) {
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
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Respiratory Rate (breaths per minute)" placeholderTextColor= {colors.light} 
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Blood Oxygen Level (%)" placeholderTextColor= {colors.light}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Heartbeat Rate (beats per minute)" placeholderTextColor= {colors.light}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Weight (Kg)" placeholderTextColor= {colors.light}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Height (Cm)" placeholderTextColor= {colors.light}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="number-pad"
          placeholder="Temperature (Celcius)" placeholderTextColor= {colors.light}
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