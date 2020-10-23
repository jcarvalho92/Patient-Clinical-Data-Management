import React from 'react';
import {StyleSheet} from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
  
    appAlignCenter:{
        alignItems: "center"  
    },
    appBackground:{
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: colors.backGround
    },
    appButtonContainer: {
        backgroundColor: colors.button,
        borderWidth: 1,
        borderColor: colors.dark,
        borderRadius: 5,
        width: 200,
        paddingVertical: 10
    },
    appButtonText: {
        fontSize: 18,
        color: colors.light,
        fontWeight: "bold",
        alignSelf: "center"
    },
    appButtonTextSize20:{
        color: colors.light,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Marker Felt',
    },
    appButtonTopRightText: {
        color: colors.primary,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },
    appContainerSignIn:{
        marginTop: 250,
        marginLeft: 30
    },
    appImageIconStyle:{
        marginHorizontal:28,
        width: 86,
        height: 78,
        resizeMode : 'stretch',
    },
    appSimpleTexts: {
        color: colors.light,
        marginTop: 20,
        marginLeft: 30,
        fontSize: 14,
        fontWeight: 'bold'
    },
    appTextCritical:{
        color: colors.red, 
        padding: 10
    },
    appTextsInput: {
        color: colors.light,
    },
    appTextTitleListPatients:{
        fontWeight: "bold", 
        fontSize: 18, 
        textAlign: "center", 
        marginTop: 5
    },
    appViewButtonSignIn:{
        padding: 70
    },
    appViewButtonTopRight:{
        alignSelf: 'flex-end',
        position: 'absolute',
        padding: 5,
    },
    appViewHorizontalFirstRow: {
        flexDirection: 'row',
        marginTop: 50
    },
    appViewHorizontalSecondRow:{
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 70
    },
    appViewInputs: {
        borderBottomColor: colors.light,
        borderBottomWidth: 1.5,
        width: 300,
        marginLeft: 30,
        height: 20,
    },
    appViewListPatients:{
        marginTop: 30,
        backgroundColor: colors.light,
        width: 415
    },
    appViewTitleListPatients:{
        height: 40, 
        borderColor: colors.grey, 
        borderWidth: 1
    }
    
    
    
     
      

})
  

export default styles;