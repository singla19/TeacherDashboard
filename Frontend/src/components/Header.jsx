import React from 'react';

function Header() {
  return (
    <div className="header bg-white text-black p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <h1 className="header-title text-2xl font-bold tracking-wide">
        Teacher Dashboard
      </h1>
      <div className="user-info flex items-center space-x-4">
        <span className="user-name font-medium text-gray font-bold">Teacher Name</span>
        <div className="aavatar bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md">
          👤
        </div>
      </div>
    </div>
  );
}

export default Header;