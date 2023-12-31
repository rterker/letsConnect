import React, { useState, useEffect } from "react";
import config from '../config.js';

//called by: AddAppointment
//dates should be comma separated in the format MM/DD/YY @ {HH:MM, HH:MM}'
const adaptValidatePost = async (formData, user, setIsInAddMode) => {
  //input values for forms are type string
  let copyOfData;
  let { date, subject, participants, status, creator } = copyOfData = {...formData};
  //adapt and validate data
  //adapt date to format YYYY-MM-DDTHH:MM:SSZ (Z indicates time zone UTC which is 5 hours after EST)

  //handle single participant or array or participants
  copyOfData.participants = participants.split(',').map(participant => participant.trim());

 

  
  // dateString = `${year}-${month}-${day}T${hour}:${minute}:00Z`;

  let response;
  try {
    response = await fetch(`${config.DEV_BASE_URL}/appointment`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(copyOfData)
    });
  
    response = await response.json();

    console.log('response:', response)

  } catch (err) {
    console.log(`The following error occured in AddAppointment while attempting to add a new appointment: ${err}`);
  }

  //handle response
  //TO DO: need to do something with the returned appointment to update the client side
  
  if (response.status === 200) console.log('New Appointment successfully created: \n' + response);

  setIsInAddMode(false);   
}

export default adaptValidatePost