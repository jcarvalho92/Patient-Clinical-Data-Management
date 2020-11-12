import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

var url = "http://127.0.0.1:2000/api/"
var patientPath = "Patients"
var RecordPath = "Record"

export function sendPatientDataToApi(dateIncluded, patientName,age, gender, addr1, addr2,city,province,postcode,mobNumb,email){
  axios.post(`${url}${patientPath}`, { 
      dateIncluded: dateIncluded,
      patientName: patientName, 
      age: age, 
      gender: gender , 
      addr1: addr1, 
      addr2: addr2, 
      city: city , 
      province: province , 
      postcode: postcode, 
      mobNumb: mobNumb, 
      email: email})
      .then(res => {
        console.log(res.data);
        Alert.alert(
          "Patient Submission", "succeded!!!", "Ok",
          { cancelable: false }
        );
      })
  .catch(res => {
    console.log(res)
    Alert.alert(
      "Patient Submission","Failed! Please fill all information", "Ok",
      { cancelable: false }
    );
  });

  }

  export async function getPatientByIDFromApi(patientID) {
    try {
        const response =  await axios.get(`${url}${patientPath}/id=${patientID}`);
        return response.data
    } catch (error) {
        console.error(error);
        Alert.alert(
          "Patient Request", "Failed! Please verify the ID passed", "Ok",
          { cancelable: false }
        );
    }
  }

  export async function getPatientByNameFromApi(patientName) {
    try {
      const response =  await axios.get(`${url}${patientPath}/name=${patientName}`);
        return response.data      
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Patient Request", "Failed! Please verify verify the Patient Name passed", "Ok",
        { cancelable: false }
      );
    }   
  }

  export async function getAllPatientsFromApi() {
    try {
      const response =  await axios.get(`${url}${patientPath}`); 
      return response.data      
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Patient Request", "Failed!", "Ok",
        { cancelable: false }
      );
    }   
  }

  export function sendPatientRecordDataToApi(patientID,bloodPressure, respiratoryRate, bloodOxygen, heartbeatRate,weight,height,temperature){

    axios.post(`${url}${RecordPath}`, { 
      patientID : patientID,
      bloodPressure : bloodPressure, 
      respiratoryRate : respiratoryRate, 
      bloodOxygen : bloodOxygen, 
      heartbeatRate : heartbeatRate,
      weight : weight,
      height : height,
      temperature : temperature})
    .then(res => {
        console.log(res.data);
        Alert.alert(
          "Record Submission", "succeded!!!", "Ok",
          { cancelable: false }
        );
    })
    .catch(error => {
      Alert.alert(
       "Record Submission", "Failed! Please fill all information", "Ok",
        { cancelable: false }
      );
    });
}