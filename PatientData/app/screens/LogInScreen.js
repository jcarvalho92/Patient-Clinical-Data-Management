import React from 'react';
import { SafeAreaView,View, TextInput, Text, TouchableOpacity} from 'react-native';


import colors from '../config/colors'
import styles from '../config/styles'

function LogInScreen({navigation}) {
    return (
    <SafeAreaView style={styles.appBackground} >
      <View  style={styles.appContainerSignIn} >
        <View style={styles.appViewInputs}> 
        <TextInput
          style={styles.appTextsInput}
          keyboardType="email-address"
          placeholder="Your email" placeholderTextColor = {colors.light}
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
        <TouchableOpacity  style={styles.appButtonContainer} activeOpacity={0.5}  onPress={() => navigation.navigate("Home")} >
            <Text style={styles.appButtonText}>Sign In</Text>
        </TouchableOpacity>
        </View>      
      </View>
    </SafeAreaView>

    );
}

export default LogInScreen;