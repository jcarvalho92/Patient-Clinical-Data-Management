import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text,TextInput, Image} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'

function SearchPatientScreen({navigation}) {
    const [searchChecked, setSearchOptionChecked] = useState(0);
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
          >
          </TextInput>
        </View>
        <View style={[styles.appAlignCenter,{marginTop: 40}]}>
          <TouchableOpacity style={styles.appButtonContainer}  activeOpacity={0.5}  onPress={() => navigation.navigate("View Patient")} >
            <Text style={styles.appButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </SafeAreaView>
    );
}

export default SearchPatientScreen;