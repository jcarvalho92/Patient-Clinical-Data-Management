import React , {useEffect, useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, FlatList} from 'react-native';

import styles from '../config/styles'
import * as api from '../resource/api'

function ViewAllPatientsScreen({navigation}) {
  const [patients, setPatients] = useState([]);

  useEffect(()=> {
    loadPatients();
  },[])

  const loadPatients = async () => {
    const response = await api.getAllPatientsFromApi();
    setPatients(response);
  }
  return (
    <SafeAreaView style={styles.appBackground} >
      <View style={styles.appViewButtonTopRight}>
       <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>
      <View style={styles.appContainerListPatients}>
        <FlatList 
          data={patients}
          renderItem={({ item }) => 
          {
            if (item.status == "Critical")
            {
              return <View style={styles.appViewListAllPatientsCritical}>
                      <TouchableOpacity
                        key={item.id}
                      >
                        <Text style={styles.appTextViewAllPatients}>{item.patientName}</Text>
                      </TouchableOpacity>
                    </View>
            }else{
              return <View style={styles.appViewListAllPatients}>
                      <TouchableOpacity
                        key={item.id}
                      >
                        <Text style={styles.appTextViewAllPatients}>{item.patientName}</Text>
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