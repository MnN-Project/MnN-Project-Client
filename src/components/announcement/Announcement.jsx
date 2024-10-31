import React from 'react';

const Announcement = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-xs text-dark-gray">View All</span>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="bg-light-green rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-dark-gray bg-white rounded-md p-1">2024-03-02</span>
          </div>
          <p className="mt-1 text-sm text-white">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="bg-light-green rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-dark-gray bg-white rounded-md p-1">2024-03-02</span>
          </div>
          <p className="mt-1 text-sm text-white">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="bg-light-green rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-dark-gray bg-white rounded-md p-1">2024-03-02</span>
          </div>
          <p className="mt-1 text-sm text-white">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
