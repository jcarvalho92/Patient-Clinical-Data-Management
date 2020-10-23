import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'


function ViewPatientScreen({navigation}) {
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
        <Text style={styles.appTextData}>123456</Text>
        <Text style={styles.appTextTitle}>Date Included</Text>
        <Text style={styles.appTextData}>2020-10-25</Text>
        <Text style={styles.appTextTitle}>Name</Text>
        <Text style={styles.appTextData}>Maria</Text>

        <Text style={styles.appTextTitle}>Age</Text>
        <Text style={styles.appTextData}>18</Text>

        <Text style={styles.appTextTitle}>Gender</Text>
        <Text style={styles.appTextData}>Female</Text>

        <Text style={styles.appTextTitle}>Adress Line 1</Text>
        <Text style={styles.appTextData}>30 Eastgate Crescent</Text>

        <Text style={styles.appTextTitle}>Adress Line 2</Text>
        <Text style={styles.appTextData}></Text>

        <Text style={styles.appTextTitle}>City</Text>
        <Text style={styles.appTextData}>Toronto</Text>

        <Text style={styles.appTextTitle}>Province</Text>
       <Text style={styles.appTextData}>ON</Text>

        <Text style={styles.appTextTitle}>Postal Code</Text>
        <Text style={styles.appTextData}>M6N 3Z5</Text>

        <Text style={styles.appTextTitle}>Phone</Text>
        <Text style={styles.appTextData}>9867542318</Text>

        <Text style={styles.appTextTitle}>Email</Text>
        <Text style={styles.appTextData}>Maria@gmail.com</Text>
      </View>
      </ScrollView>
      
    </SafeAreaView>
    );
}

export default ViewPatientScreen;