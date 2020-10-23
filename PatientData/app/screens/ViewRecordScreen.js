import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'

function ViewRecordScreen({navigation}) {
    return (
    <SafeAreaView style={styles.appBackground} >
      <View style={styles.appViewButtonTopRight}>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>

      <View style={styles.appViewRecord}>
       
        <Text style={styles.appTextTitle}>Patient Id</Text>
        <Text style={styles.appTextData}>123456</Text>

        <Text style={styles.appTextTitle}>Name</Text>
        <Text style={styles.appTextData}>Maria</Text>

        <Text style={styles.appTextTitle}>Blood Pressure</Text>
        <Text style={styles.appTextData}>120/80 mm Hg</Text>

        <Text style={styles.appTextTitle}>Respiratory Rate</Text>
        <Text style={styles.appTextData}>12 breaths per minute</Text>

        <Text style={styles.appTextTitle}>Blood Oxygen Level</Text>
        <Text style={styles.appTextData}>95%</Text>

        <Text style={styles.appTextTitle}>Heartbeats</Text>
        <Text style={styles.appTextData}>80 beats per minute</Text>

        <Text style={styles.appTextTitle}>Weight</Text>
        <Text style={styles.appTextData}>60 kg</Text>

        <Text style={styles.appTextTitle}>Height</Text>
       <Text style={styles.appTextData}>160 cm</Text>

        <Text style={styles.appTextTitle}>Temperature</Text>
        <Text style={styles.appTextData}>37.5 C</Text>

      </View>
    </SafeAreaView>
    );
}

export default ViewRecordScreen;