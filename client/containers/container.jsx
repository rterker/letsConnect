import React, { useEffect, useState } from "react";


const Container = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    function getUser(id) {
      fetch(`http://localhost:8080/user/${id}`)
        .then(user => user.json())
        .then(user => setUser(user))
        .catch(err => console.log(`The following error occured in getUser: ${err}`));
    } 
    getUser('657f205517722b44fe9fda33');
  }, []);

  return (
    <>
      <div className="bg-gray-300 w-72"></div>
      <div className="bg-black flex-grow"></div>
    </>
  );
}

export default Container;
