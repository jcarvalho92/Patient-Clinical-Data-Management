import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text,TextInput, Image} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'
import * as api from '../resource/api'

var patientInfo
var searchChecked
function SearchPatientScreen({navigation}) {
     [patientInfo, setPatientInfo] = useState("");
     [searchChecked, setSearchOptionChecked] = useState(0);
    var searchPatientOptions = ['Search Patient By ID', 'Search Patient By Name'];
    return (
    <SafeAreaView style={styles.appBackground} >
        <View style={styles.appViewButtonTopRight}>
          <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
              <Text style={styles.appButtonTopRightText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appContainerSignIn}>
          <View style={styles.appViewRadioSearchScreen}>
            <View style={styles.appViewRadioMarginBottom}>
               {searchPatientOptions.map((searchPatientOptions, key) => {
               return (
                <View key={searchPatientOptions}>
                  {searchChecked == key ? (
                   <TouchableOpacity style={styles.appViewRadioButton}>
                      <Image
                        style={styles.appImageRadio}
                       source={require('../assets/images/radio_checked.png')}
                     />
                     <Text style={{color: colors.light, fontWeight: "bold"}}>{searchPatientOptions}</Text>
                    </TouchableOpacity>
                 ) : (
                  <TouchableOpacity
                     onPress={() => {
                     setSearchOptionChecked(key);
                     }}
                      style={styles.appViewRadioButton}>
                     <Image
                       style={styles.appImageRadio}
                       source={require('../assets/images/radio_unchecked.png')}
                      />
                     <Text style={{color: colors.light, fontWeight: "bold"}}>{searchPatientOptions}</Text>
                    </TouchableOpacity>
                  )}
                </View>
                );
              })}
            </View>
        </View>
  
        <View style={styles.appViewInputs}>
          <TextInput
            style={styles.appTextsInput}
            placeholder="Type Here" placeholderTextColor={colors.light}
            onChangeText={(patientInfo) => setPatientInfo(patientInfo)}
            value={patientInfo}
          >
          </TextInput>
        </View>
        <View style={[styles.appAlignCenter,{marginTop: 40}]}>
          <TouchableOpacity 
              style={styles.appButtonContainer}  activeOpacity={0.5}  
              onPress={() => getPatientInfo({navigation})}
          >
            <Text style={styles.appButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </SafeAreaView>
    );
}

 async function getPatientInfo({navigation}){
  
  let result = await (searchChecked == 0 ? api.getPatientByIDFromApi(patientInfo) : api.getPatientByNameFromApi(patientInfo))
  navigation.navigate("View Patient",result)
}

export default SearchPatientScreen;