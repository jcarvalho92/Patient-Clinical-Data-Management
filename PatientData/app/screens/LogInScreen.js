import React, {useState} from 'react';
import { SafeAreaView,View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';

import * as Users from '../resource/users'
import colors from '../config/colors'
import styles from '../config/styles'

var email
function LogInScreen({navigation}) {
    [userEmail, setEmail] = useState('');
    return (
    <SafeAreaView style={styles.appBackground} >
      <View  style={styles.appContainerSignIn} >
        <View style={styles.appViewInputs}> 
        <TextInput
          style={styles.appTextsInput}
          keyboardType="email-address"
          placeholder="Your email" placeholderTextColor = {colors.light}
          onChangeText={(email) => setEmail(email)}
        />
       </View>

        <Text style={styles.appSimpleTexts}>Password</Text>
        <View style={styles.appViewInputs}>
          <TextInput
            style={styles.appTextsInput}
            secureTextEntry={true}>
          </TextInput>
        </View>
        <View style={styles.appViewButtonSignIn}>
        <TouchableOpacity  style={styles.appButtonContainer} activeOpacity={0.5}  onPress={() => validateLogin({navigation})} >
            <Text style={styles.appButtonText}>Sign In</Text>
        </TouchableOpacity>
        </View>      
      </View>
    </SafeAreaView>

    );
}

function validateLogin({navigation}){
  var index = Users.userList.findIndex(function(item, i){
    return item.email === userEmail.toLowerCase();
  });
  if(index != -1){
    navigation.navigate("Home")
  }
  else{
    Alert.alert(
      "Login", "user does not found, Please try again", "Ok",
      { cancelable: false }
    );
  }
}

export default LogInScreen;