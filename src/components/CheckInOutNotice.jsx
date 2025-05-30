import React from 'react';
import { Info } from 'lucide-react';

const CheckInOutNotice = () => {
  return (
    <div className="flex items-center gap-3 bg-blue-50 text-blue-800 border border-blue-200 p-3 rounded-md shadow-sm mt-4">
      <Info className="w-5 h-5 text-blue-500" />
      <span className="text-sm">
        <strong>Check-in:</strong> 2:00 PM &nbsp; | &nbsp;
        <strong>Check-out:</strong> 11:00 AM
      </span>
    </div>
  );
};

export default CheckInOutNotice;
