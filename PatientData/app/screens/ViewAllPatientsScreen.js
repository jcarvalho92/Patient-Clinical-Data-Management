import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, FlatList} from 'react-native';

import styles from '../config/styles'
import * as DataPatients from '../resource/dataPatients'

function ViewAllPatientsScreen({navigation}) {
    return (
    <SafeAreaView style={styles.appBackground} >
      <View style={styles.appViewButtonTopRight}>
       <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>
      <View style={styles.appContainerListPatients}>
        <FlatList 
          data={DataPatients.patientList}
          renderItem={({ item }) => 
          {
            if (item.status == "critical")
            {
              return <View style={styles.appViewListAllPatientsCritical}>
                      <TouchableOpacity
                        key={item.id.toString()}
                      >
                        <Text style={styles.appTextViewAllPatients}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
            }else{
              return <View style={styles.appViewListAllPatients}>
                      <TouchableOpacity
                        key={item.id.toString()}
                      >
                        <Text style={styles.appTextViewAllPatients}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
            }
          }}
        />
      </View>
    </SafeAreaView>
    );
}

export default ViewAllPatientsScreen;