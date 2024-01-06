import config from '../config.js';

//called by: ActiveDAy
//if you leave off the Z in dateTime string, it means local time. backend will convert to GMT and add the Z
//i think update data should contain the updateData.potentialDates data to keep. don't think it was updated since clickedAppointment. 
//keeping potential dates and handling on backend. may decide to use them later.
const adaptValidateConfirmAppt = async (updateData, confirmedAppointmentDateTime, setAppointments) => {
  //input values for forms are type string
  const copyOfData = {...updateData};
  const { participants } = copyOfData;

  //for now, participants are not updated, so the updateData.participants retains the type of array; however, if we add participants as an update field in the form, it 
  //should be cast from string to array, in which case, we need this line. 
  if (typeof participants === 'string') copyOfData.participants = participants.split(',').map(participant => participant.trim());

  let response;
  let responseStatus;
  let updatedAppointment;

  copyOfData.date = new Date(confirmedAppointmentDateTime);
  //TO DO: may want to handle status change on the back end later
  copyOfData.status = 'confirmed';

  console.log('updateData in confirm: ', copyOfData)

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
        //why does this line actually show the list after the update? it's rerendering main container. some state must be changing. may be because copyOfData is a shallow copy
        console.log('appointment list before confirm in adaptValidateConfirmAppt:', newAppointmentList) 
        const index = newAppointmentList.findIndex(el => el._id === updatedAppointment._id);
        //update that index with new appointment
        newAppointmentList[index] = updatedAppointment;
        return newAppointmentList;
      });
      console.log('Appointment successfully confirmed: \n' + JSON.stringify(updatedAppointment, null, 2)); 
    } else {
      console.log('Status code: ', responseStatus);
      console.log('Issue occured during appointment confirm in adaptValidateConfirmAppt');
    }

  } catch (err) {
    console.log(`The following error occured in adaptValidateConfirmAppt while attempting to update appointment: ${err}`);
  }


  //TO DO: need to do something with the returned appointment to update the client side
  


  
}

export default adaptValidateConfirmAppt