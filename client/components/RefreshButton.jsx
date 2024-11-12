import React from "react";

//called from: BodyContainer
const RefreshButton = ({ setShouldRefresh }) => {
  //TO DO - possible refactor: set some state here, and put appointment fetch inside of async handleClick, and when fetch resolves, set state with fetch appointments, then set appoinments in MainContainer
  function handleClick() {
    setShouldRefresh((prevValue) => prevValue * -1);
  }

  return (
    <div className="m-4 relative w-12 h-12 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer" onClick={handleClick}>
      <img src="/assets/Refresh_icon.png" alt="Refresh button" />
    </div>
  );
}

export default RefreshButton;