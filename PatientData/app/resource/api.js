import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

var url = "https://patient-data-api.herokuapp.com/api/"
var patientPath = "patients"
var recordPath = "records"

export async function sendPatientDataToApi(dateIncluded, patientName,age, gender, addr1, addr2,city,province,postcode,mobNumb,email){
  await axios.post(`${url}${patientPath}`, { 
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
        const response =  await axios.get(`${url}${patientPath}/${patientID}`);
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
      const response =  await axios.get(`${url}${patientPath}/name/${patientName}`);
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

  export async function sendPatientRecordDataToApi(dateIncluded, patientID,bloodPressure, respiratoryRate, bloodOxygen, heartbeatRate,weight,height,temperature, status){
    console.log(`${url}${patientPath}/${patientID}/${recordPath}`);
    await axios.post(`${url}${patientPath}/${patientID}/${recordPath}`, { 
      dateIncluded: dateIncluded,
      bloodPressure : bloodPressure, 
      respiratoryRate : respiratoryRate, 
      bloodOxygen : bloodOxygen, 
      heartbeatRate : heartbeatRate,
      weight : weight,
      height : height,
      temperature : temperature,
      status: status
    })
    .then(res => {
        console.log(res.data);
        Alert.alert(
          "Record Submission", "succeded!!!", "Ok",
          { cancelable: false }
        );
    })
    .catch(error => {
      console.log(error);
      Alert.alert(
        "Record Submission", "Failed!", "Ok",
        { cancelable: false }
      );
     
    });
  }

  export async function getRecordByPatientIDFromApi(patientID) {
    try {
        const response =  await axios.get(`${url}${patientPath}/${patientID}/${recordPath}`);
        return response.data
    } catch (error) {
        console.error(error);
        Alert.alert(
          "Record by patient id Request", "Failed! Please verify the ID passed", "Ok",
          { cancelable: false }
        );
    }
  }

  export async function getRecordByPatientNameFromApi(patientName) {
    try {
      const response = await axios.get(`${url}${patientPath}/name/${patientName}/${recordPath}`);  
    
      return response.data
    } catch (error) {
        console.error(error);
        Alert.alert(
          "Record by Patient name Request", "Failed! Please verify the ID passed", "Ok",
          { cancelable: false }
        );
    }
  }