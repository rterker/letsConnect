import React from "react";

const RefreshButton = () => {

  function handleClick() {

  }

  return (
    <div className="m-4 relative w-12 h-12 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer" onClick={handleClick}>
      <img src="/assets/Refresh_icon.png" alt="Refresh button" />
    </div>
  );
}

export default RefreshButton;