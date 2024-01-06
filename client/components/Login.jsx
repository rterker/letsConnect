import React, { useState, useEffect } from "react";
import config from "../config.js";

const userMap = {
  'marshall': '657f205517722b44fe9fda33',
  'oscar': '657f205517722b44fe9fda32',
  'ross': '6583b3b4342f527aff868191'
}

const Login = ({ setUser, setIsLogged, setIsUserLoading }) => {
  const [userData, setUserData] = useState({name: ''});

  let controller = new AbortController();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevFormData) => ({...prevFormData, [name]: value}));
  }

  async function handleSubmit() {
    try {
      controller.abort();
      controller = new AbortController();

      const response = await fetch(`${config.DEV_BASE_URL}/user/${userMap[userData.name]}`, controller.signal);
      if (!response.ok) {
        throw new Error('Server response error during user fetch in Login');
      }
      const jsonData = await response.json();
      setUser(jsonData);
      setIsUserLoading(false);
      setIsLogged(true);

    } catch (err) {
      console.log('Error during Login fetch')
    }

  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col h-160 w-160 bg-white ">
        <h1 id='title' className="text-center pt-20 pb-12 text-8xl text-blue-500 text-satisfy " >letsConnect</h1>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col w-2/3 h-2/3 border border-grey-200 rounded-xl mb-12">
            <div className="h-2/3 w-full">
            <form className="bg-grey h-full ml-20 mt-20">
                <label htmlFor="name" className="text-xl">Username: </label>
                <input name="name" type="text" value={userData.name}  onChange={(e) => handleChange(e)} required/>
            </form>
            </div>
            <button className="h-12 w-36 mx-auto bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

