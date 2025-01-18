import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup moment as the localizer
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: new Date(2024, 11, 10, 10, 0), // Dec 10, 2024, 10:00 AM
      end: new Date(2024, 11, 10, 12, 0),   // Dec 10, 2024, 12:00 PM
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 11, 11, 13, 0), // Dec 11, 2024, 1:00 PM
      end: new Date(2024, 11, 11, 14, 0),   // Dec 11, 2024, 2:00 PM
    },
  ]);

  return (
  <>
  <h2 className="py-5 text-center">MyCalendar</h2>
      <div style={{ height: "500px", margin: "20px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
  </>
  );
};

export default MyCalendar;
