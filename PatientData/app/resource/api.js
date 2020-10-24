import React, { useState } from "react";
import { Alert } from "react-native";

export function sendPatientDataToApi(patientName,age, gender, addr1, addr2,city,province,postcode,mobNumb,email){

    fetch("http://127.0.0.1:2000/api/patients", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      patientName: patientName, 
      age: age, 
      gender: gender , 
      addr1: addr1, 
      addr2: addr2, 
      city: city , 
      province: province , 
      postcode: postcode, 
      mobNumb: mobNumb, 
      email: email
    })
  }).then(response => response.json())
  .then(result => {
    Alert.alert(
      "Submission", "succeded!!!", "Ok",
      { cancelable: false }
    );
  })
  .catch(error => {
    Alert.alert(
      "Submission", "Failed! Please fill all information", "Ok",
      { cancelable: false }
    );
  });


  
 
  
  }

  

