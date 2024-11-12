import React from "react";

const LogoutButton = ({ setIsLogged }) => {

  function handleClick() {
    setIsLogged(false);
  }

return (
  <div className="m-4 pt-1 text-center text-gray-600 relative w-12 h-12 bg-[#c1c0b9] text-4xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer" onClick={handleClick}>
    {/* <img src="/assets/logout.png" alt="Logout button" /> */}
    X
  </div>
);

}

export default LogoutButton;