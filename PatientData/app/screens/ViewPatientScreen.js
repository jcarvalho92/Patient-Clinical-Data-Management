import React , { useEffect } from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'


function ViewPatientScreen({route, navigation}) {
  const patientInfo   = route.params
  return (
    <SafeAreaView style={styles.appBackground} >
      <ScrollView style={styles.appScrollView}>
      <View style={styles.appViewButtonTopRight}>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.appViewData}>

        <Text style={styles.appTextTitle}>Patient Id</Text>
        <Text style={styles.appTextData}></Text>
        <Text style={styles.appTextTitle}>Date Included</Text>
  <Text style={styles.appTextData}>{patientInfo.dateIncluded}</Text>
        <Text style={styles.appTextTitle}>Name</Text>
        <Text style={styles.appTextData}>{patientInfo.patientName}</Text>

        <Text style={styles.appTextTitle}>Age</Text>
        <Text style={styles.appTextData}>{patientInfo.age}</Text>

        <Text style={styles.appTextTitle}>Gender</Text>
        <Text style={styles.appTextData}>{patientInfo.gender}</Text>

        <Text style={styles.appTextTitle}>Adress Line 1</Text>
        <Text style={styles.appTextData}>{patientInfo.addr1}</Text>

        <Text style={styles.appTextTitle}>Adress Line 2</Text>
        <Text style={styles.appTextData}>{patientInfo.addr2}</Text>

        <Text style={styles.appTextTitle}>City</Text>
        <Text style={styles.appTextData}>{patientInfo.city}</Text>

        <Text style={styles.appTextTitle}>Province</Text>
       <Text style={styles.appTextData}>{patientInfo.province}</Text>

        <Text style={styles.appTextTitle}>Postal Code</Text>
        <Text style={styles.appTextData}>{patientInfo.postcode}</Text>

        <Text style={styles.appTextTitle}>Phone</Text>
        <Text style={styles.appTextData}>{patientInfo.mobNumb}</Text>

        <Text style={styles.appTextTitle}>Email</Text>
        <Text style={styles.appTextData}>{patientInfo.email}</Text>
      </View>
      </ScrollView>
      
    </SafeAreaView>
    );
}

export default ViewPatientScreen;