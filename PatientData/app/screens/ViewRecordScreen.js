import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'

function ViewRecordScreen({route, navigation}) {
  console.log("inside view record screen")
  const RecordInfo   = route.params  

  return (
    <ScrollView>
    <SafeAreaView style={styles.appBackground} >
      
      <View style={styles.appViewButtonTopRight}>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>

      <View style={styles.appViewRecord}>
       
        <Text style={styles.appTextTitle}>Doctor Name</Text>
        <Text style={styles.appTextData}>{RecordInfo.doctor}</Text>

        <Text style={styles.appTextTitle}>Data Included</Text>
        <Text style={styles.appTextData}>{RecordInfo.dataIncluded}</Text>

        <Text style={styles.appTextTitle}>Patient Id</Text>
        <Text style={styles.appTextData}>{RecordInfo.patient_Id}</Text>

        <Text style={styles.appTextTitle}>Name</Text>
        <Text style={styles.appTextData}>{RecordInfo.patientName}</Text>

        <Text style={styles.appTextTitle}>Blood Pressure</Text>
        <Text style={styles.appTextData}>{RecordInfo.bloodPressure}</Text>

        <Text style={styles.appTextTitle}>Respiratory Rate</Text>
        <Text style={styles.appTextData}>{RecordInfo.respiratoryRate}</Text>

        <Text style={styles.appTextTitle}>Blood Oxygen Level</Text>
        <Text style={styles.appTextData}>{RecordInfo.bloodOxygen}</Text>

        <Text style={styles.appTextTitle}>Heartbeats</Text>
        <Text style={styles.appTextData}>{RecordInfo.heartbeatRate}</Text>

        <Text style={styles.appTextTitle}>Weight</Text>
        <Text style={styles.appTextData}>{RecordInfo.weight}</Text>

        <Text style={styles.appTextTitle}>Height</Text>
       <Text style={styles.appTextData}>{RecordInfo.height}</Text>

        <Text style={styles.appTextTitle}>Temperature</Text>
        <Text style={styles.appTextData}>{RecordInfo.temperature}</Text>

        <Text style={styles.appTextTitle}>Status</Text>
        <Text style={styles.appTextData}>{RecordInfo.status}</Text>
      </View>
     
    </SafeAreaView>
    </ScrollView>
    );
}

export default ViewRecordScreen;