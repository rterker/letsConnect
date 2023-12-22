import React, { useEffect, useState } from "react";


const Container = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(async () => {
    const user = getUser('657f205517722b44fe9fda33');
    console.log('user 1:', user.userName)
    setUser(user);
    // const appointments = getAppointments();
  }, []);

}

export default Container;


async function getUser(id) {
  try {
    const user = await fetch(`http://localhost:8080/user/${id}`).json();
    console.log('user 2:', user.userName)
    return user;
  } catch (err) {
    return console.log(`The following error occured in getUser: ${err}`)
  }
}

async function getAppointments(id) {
  return await fetch(`http://localhost:3000/appointment/${id}`);
}