import config from '../config.js';

//called by: ActiveDAy
//possible input: dates can be comma separated in the format YYYY-MM-DDTHH:MM:SS. backend expecting date in format YYYY-MM-DDTHH:MM:SSZ. LEAVE
//OFF THE Z, so it means local time. backend will convert to GMT and add the Z
const adaptValidateUpdateAppt = async (userName, updateData, clickedAppointmentCopy, setAppointments, availabilities) => {
  //input values for forms are type string
  const copyOfData = {...updateData};
  const { participants } = copyOfData;
  let { potentialDates: originalPotentialDatesToKeepOnUpdate } = clickedAppointmentCopy;

  //for now, participants are not updated, so the updateData.participants retains the type of array; however, if we add participants as an update field in the form, it 
  //should be cast from string to array, in which case, we need this line. 
  if (typeof participants === 'string') copyOfData.participants = participants.split(',').map(participant => participant.trim());

  availabilities = availabilities.map(availability => {
    const date = new Date(availability);
    return date.toUTCString();
  });

  originalPotentialDatesToKeepOnUpdate = originalPotentialDatesToKeepOnUpdate.filter(potentialDatesObject => potentialDatesObject.userName !== userName);

  const userUpdatedPotentialDatesData = {
    userName,
    availabilities
  };

  copyOfData.potentialDates = [...originalPotentialDatesToKeepOnUpdate, userUpdatedPotentialDatesData];

  let response;
  let responseStatus;
  let updatedAppointment;

  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment/${updateData._id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    responseStatus = response.status;
    updatedAppointment = await response.json();

    if (responseStatus === 200) {
      //this set lets the sidebar update immediately after edit
      setAppointments((prevAppointments) => {
        const newAppointmentList = [...prevAppointments];
        console.log('appointment list before update in adaptValidateUpdateAppt:', newAppointmentList) //why does this line actually show the list after the update? it's rerendering main container. some state must be changing 
        const index = newAppointmentList.findIndex(el => el._id === updatedAppointment._id);
        //update that index with new appointment
        newAppointmentList[index] = updatedAppointment;
        return newAppointmentList;
      });
      console.log('Appointment successfully updated: \n' + JSON.stringify(updatedAppointment, null, 2)); 
    } else {
      console.log('Status code: ', responseStatus);
      console.log('Issue occured during appointment update in adaptValidateUpdateApp');
    }

  } catch (err) {
    console.log(`The following error occured in adaptValidateUpdateAppt while attempting to update appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidateUpdateAppt