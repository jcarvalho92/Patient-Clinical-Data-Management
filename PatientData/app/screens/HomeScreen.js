import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Image, Text, FlatList} from 'react-native';

import styles from '../config/styles'
import * as DataPatients from '../resource/dataPatients'
 
function HomeScreen({navigation}) {
    return (
    <SafeAreaView style={styles.appBackground} >
      <View style={styles.appViewButtonTopRight}>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Log In")} >
            <Text style={styles.appButtonTopRightText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appViewHorizontalFirstRow}>
        <TouchableOpacity style={styles.appAlignCenter} activeOpacity={0.5}  onPress={() => navigation.navigate("Add Patient")}>
          <Image 
            source={require('../assets/images/addPatientButton.png')} 
            style={styles.appImageIconStyle} 
          />
          <Text style={styles.appButtonTextSize20}>Add</Text>
          <Text style={styles.appButtonTextSize20}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appAlignCenter} activeOpacity={0.5}  onPress={() => navigation.navigate("Search Patient")} >
          <Image 
            source={require('../assets/images/viewPatientButton.png')} 
            style={styles.appImageIconStyle} 
          />
          <Text style={styles.appButtonTextSize20}>View</Text>
          <Text style={styles.appButtonTextSize20}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appAlignCenter} activeOpacity={0.5}  onPress={() => navigation.navigate("View All Patient")} >
          <Image 
            source={require('../assets/images/viewPatientButton.png')} 
            style={styles.appImageIconStyle} 
          />
          <Text style={styles.appButtonTextSize20}>View</Text>
          <Text style={styles.appButtonTextSize20}>All Patient</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.appViewHorizontalSecondRow}>
        <TouchableOpacity style={styles.appAlignCenter} activeOpacity={0.5}  onPress={() => navigation.navigate("Add Record")} >
          <Image 
            source={require('../assets/images/addRecordButton.png')} 
            style={styles.appImageIconStyle} 
          />
          <Text style={styles.appButtonTextSize20}>Add</Text>
          <Text style={styles.appButtonTextSize20}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appAlignCenter} activeOpacity={0.5} onPress={() => navigation.navigate("Search Record")} >
          <Image 
            source={require('../assets/images/viewRecordButton.png')} 
            style={styles.appImageIconStyle} 
          />
          <Text style={styles.appButtonTextSize20}>View</Text>
          <Text style={styles.appButtonTextSize20}>Record</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.appViewListPatients}>
        <View style={styles.appViewTitleListPatients}>
          <Text style={styles.appTextTitleListPatients}>Critical Cases</Text>
        </View>
        <FlatList 
          data={DataPatients.patientList}
          renderItem={({item, index}) => 
          {
            if (item.status.toString() == "critical")
            {
              return <View style={styles.appViewTitleListPatients}>
                      <TouchableOpacity key={index}>
                        <Text style={styles.appTextCritical}>{item.name.toString()}</Text>
                      </TouchableOpacity>
                    </View>
            }
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
    );
}


export default HomeScreen;

