import config from '../config.js';

//called by: AddAppointment
//possible input: dates can be comma separated in the format MM/DD/YY @ {HH:MM, HH:MM}'. backend expecting date in format YYYY-MM-DDTHH:MM:SSZ
const adaptValidatePostAppt = async (user, formData, setAppointments) => {
  console.log('adaptValidatePost invoked')
  //input values for forms are type string
  const copyOfData = {...formData};
  const { participants } = copyOfData;
  const { _id: userId } = user;

  //participants is a string
  copyOfData.participants = participants.split(',').map(participant => participant.trim());

  //potentialDates is a string but this will change later
  let { potentialDates } = copyOfData;
  potentialDates = potentialDates.split(',').map(date => date.trim());
  copyOfData.potentialDates = [
    {
      userId,
      potentialDates
    }
  ];

  let response;
  let responseStatus;
  let createdAppointment;

  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    responseStatus = response.status;
    createdAppointment = await response.json();
    console.log('createdAppointment json response:', createdAppointment)

    if (responseStatus === 200) {
      //this set lets the sidebar update immediately after appointment created
      setAppointments((prevAppointments) => {
        const newAppointmentList = [...prevAppointments];
        console.log('appointment list before create in adaptValidatePostAppt:', newAppointmentList)
        //add new appointment
        newAppointmentList.push(createdAppointment)
        return newAppointmentList;
      });
      console.log('New Appointment successfully created: \n' + JSON.stringify(createdAppointment, null, 2)); 
    } else {
      console.log('Status code: ', responseStatus);
      console.log('Issue occured during new appointment creation in adaptValidatePostAppt');
    }
    
    // this is how a successful createdAppointment looks
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
    console.log(`The following error occured in adaptValidatePostAppt while attempting to add a new appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidatePostAppt