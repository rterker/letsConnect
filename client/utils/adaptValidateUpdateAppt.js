import config from '../config.js';

//called by: ActiveDAy
//possible input: dates can be comma separated in the format MM/DD/YY @ {HH:MM, HH:MM}'. backend expecting date in format YYYY-MM-DDTHH:MM:SSZ
const adaptValidateUpdateAppt = async (formData, user) => {
  console.log('adaptValidateUpdate invoked')
  //input values for forms are type string
  const copyOfData = {...formData};
  const { participants } = copyOfData;

  //for now, participants are not updated, so the formData.participants retains the type of array; however, if we add participants as an update field in the form, it 
  //should be cast to string, in which case, we need this line. 
  if (typeof participants === 'string') copyOfData.participants = participants.split(',').map(participant => participant.trim());

  let response;
  let responseStatus;
  let updatedAppointment;

  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment/${formData._id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    responseStatus = response.status;
    updatedAppointment = await response.json();
    console.log('updated appointment json:', updatedAppointment)

    if (responseStatus === 200) {
      console.log('Appointment successfully updated: \n' + JSON.stringify(updatedAppointment, null, 2)); 
    } else {
      console.log('Status code: ', responseStatus);
      console.log('Issue occured during appointment update in adaptValidateUpdateApp');
    }
    
    // this is how a successful updatedAppointment looks
    // Appointment successfully updated: 
    // {
    //   "_id": "659444bd5a210fb40fad174e",
    //   "date": "2024-02-01T05:30:00.000Z",
    //   "subject": "Testing update updated from front end",
    //   "participants": [
    //     "marshall@gmail.com",
    //     "oscar@gmail.com"
    //   ],
    //   "status": "pending",
    //   "creator": "marshall@gmail.com",
    //   "createdAt": "2024-01-02T17:15:41.174Z",
    //   "__v": 0
    // }

  } catch (err) {
    console.log(`The following error occured in adaptValidateUpdateAppt while attempting to update appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidateUpdateAppt