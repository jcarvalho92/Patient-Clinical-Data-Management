
export function sendPatientDataToApi(patientName,age, gender, addr1, addr2,city,province,postcode,mobNumb,email){
    try{
      fetch("http://127.0.0.1:3000/api/patients", {
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
  });
    }
    catch(e){
      console.log(e);
    }
  }
  

