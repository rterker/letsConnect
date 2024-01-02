import config from '../config.js';

//called by: ActiveDAy
//possible input: dates can be comma separated in the format MM/DD/YY @ {HH:MM, HH:MM}'
const adaptValidateUpdateAppt = async (formData, user) => {
  console.log('adaptValidateUpdate invoked')
  //input values for forms are type string
  const copyOfData = {...formData};
  const { participants } = copyOfData;

  copyOfData.participants = participants.split(',').map(participant => participant.trim());

  let response;
  let responseStatus;
  let responseJson;

  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    responseStatus = response.status;
    responseJson = await response.json();

    if (responseStatus === 200) {
      console.log('Appointment successfully updated: \n' + JSON.stringify(responseJson, null, 2)); 
    } else {
      console.log('Status code: ', responseStatus);
      console.log('Issue occured during appointment update in adaptValidateUpdateApp');
    }
    
    // this is how a successful responseJson looks
    // New Appointment successfully created: 
    // {
    //   "date": "2024-01-23T05:00:00.000Z",
    //   "subject": "Test Subject 3",
    //   "participants": [
    //     "marshall@gmail.com"
    //   ],
    //   "status": "pending",
    //   "creator": "marshall@gmail.com",
    //   "_id": "65921853f65b2794e06ab7e9",
    //   "createdAt": "2024-01-01T01:41:39.839Z",
    //   "__v": 0
    // }

  } catch (err) {
    console.log(`The following error occured in adaptValidateUpdateAppt while attempting to update appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidateUpdateAppt