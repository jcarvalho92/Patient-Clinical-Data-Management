import React, {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Image, Text, TextInput} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors'
import * as api from '../resource/api'

function AddPatientScreen({navigation}) {

    const [checked, setChecked] = useState(-1);
    const [patientName, setPatientName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [addr1, setAddr1] = React.useState('');
    const [addr2, setAddr2] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [postcode, setPostCode] = React.useState('');
    const [mobNumb, setMobNumb] = React.useState('');
    const [email, setEmail] = React.useState('');
    var genderOption = ['F', 'M'];
    var today = new Date();
    date = parseInt(today.getMonth()+1) + "/"+ today.getDate() +"/"+ today.getFullYear();

    return (
    <SafeAreaView style={styles.appBackground} >
     <View style={styles.appViewButtonTopRight}>
       <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonTopRightText}>Home</Text>
        </TouchableOpacity>
     </View>


     <View style={styles.appViewInputsMarginTop}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="name-phone-pad"
          placeholder="Full Name" placeholderTextColor= {colors.light}
          onChangeText={(patientName) => setPatientName(patientName)}
          value={patientName}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          placeholder="Age" placeholderTextColor= {colors.light}
          onChangeText={(age) => setAge(age)}
          value={age}
        >
        </TextInput>
      </View>


      <View style={styles.appViewRadio}>
        <View style={styles.appViewRadioButton}>
          <Text style={{color: colors.light}}>Gender: </Text>
          
            {genderOption.map((genderOption, key) => {
              return (
                <View key={genderOption}>
                  {checked == key ? (
                   <TouchableOpacity style={styles.appViewRadioButton}>
                     <Image
                       style={styles.appImageRadio}
                       source={require('../assets/images/radio_checked.png')}
                     />
                     <Text style={{color: colors.light}}>{genderOption}</Text>
                   </TouchableOpacity>
                 ) : (
                   <TouchableOpacity
                     onPress={() => {
                        setChecked(key);
                        setGender(genderOption);
                      }}
                      style={styles.appViewRadioButton}>
                      <Image
                        style={styles.appImageRadio}
                        source={require('../assets/images/radio_unchecked.png')}
                      />
                      <Text style={{color: colors.light}}>{genderOption}</Text>
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
          placeholder="Adress Line 1" placeholderTextColor={colors.light}
          onChangeText={(addr1) => setAddr1(addr1)}
          value={addr1}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          placeholder="Adress Line 2" placeholderTextColor={colors.light}
          onChangeText={(addr2) => setAddr2(addr2)}
          value={addr2}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          placeholder="City" placeholderTextColor={colors.light}
          onChangeText={(city) => setCity(city)}
          value={city}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          placeholder="Province" placeholderTextColor={colors.light}
          onChangeText={(province) => setProvince(province)}
          value={province}
        >
        </TextInput>
      </View>      

      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          placeholder="Postal Code" placeholderTextColor={colors.light} 
          onChangeText={(postcode) => setPostCode(postcode)}
          value={postcode}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="phone-pad"
          placeholder="Phone" placeholderTextColor={colors.light}
          onChangeText={(mobNumb) => setMobNumb(mobNumb)}
          value={mobNumb}
        >
        </TextInput>
      </View>
      <View style={styles.appViewInputs}>
        <TextInput
          style={styles.appTextsInput}
          keyboardType="email-address"
          placeholder="Email" placeholderTextColor={colors.light}
          onChangeText={(email) => setEmail(email)}
          value={email}
        >
        </TextInput>
      </View>

     <View style={styles.appViewButton}>
        <TouchableOpacity style={styles.appButtonContainer} activeOpacity={0.5}  
        onPress={() => 
        api.sendPatientDataToApi(date, patientName,age, gender, addr1, addr2,city,province,postcode,mobNumb,email)
        
        }>
         <Text style={styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
   </SafeAreaView>
    );
}

export default AddPatientScreen;