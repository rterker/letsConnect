import config from '../config.js';

//called by: AddAppointment
//possible input: dates can be comma separated in the format YYYY-MM-DDTHH:MM:SS. backend expecting date in format YYYY-MM-DDTHH:MM:SSZ. LEAVE
//OFF THE Z, so it means local time. backend will convert to GMT and add the Z
const adaptValidatePostAppt = async (userName, formData, setAppointments, availabilities) => {
  //input values for forms are type string
  const copyOfData = {...formData};
  const { participants } = copyOfData;

  //participants is a string, cast to array
  if (typeof participants === 'string') copyOfData.participants = participants.split(',').map(participant => participant.trim());

  availabilities = availabilities.map(availability => {
    const date = new Date(availability);
    return date.toUTCString();
  });

  copyOfData.potentialDates = [
    {
      userName,
      availabilities
    }
  ];

  let response;
  let responseStatus;
  let createdAppointment;

  console.log('updateData in create: ', copyOfData)

  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    responseStatus = response.status;
    createdAppointment = await response.json();

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

  } catch (err) {
    console.log(`The following error occured in adaptValidatePostAppt while attempting to add a new appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidatePostAppt