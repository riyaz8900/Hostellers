import { FaCalendarCheck } from "react-icons/fa";

const AvailabilityHeader = ({ checkIn = "12/01/26", checkOut = "14/01/26" }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex flex-wrap gap-2 justify-end">
        <div className="bg-yellow-300 text-sm sm:text-base px-4 py-2 rounded-full flex items-center gap-2 font-medium">
          Check In <FaCalendarCheck /> {checkIn}
        </div>
        <div className="bg-yellow-300 text-sm sm:text-base px-4 py-2 rounded-full flex items-center gap-2 font-medium">
          Check Out <FaCalendarCheck /> {checkOut}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityHeader;
