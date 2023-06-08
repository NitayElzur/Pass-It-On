import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react'

function Calendar() {
  const [events, setEvents] = useState([])
  const Challenges = JSON.parse(localStorage.getItem('challenges'));
  useEffect(() => {
    Challenges.map(item =>
      setEvents(prevEvents => [
        ...prevEvents,
        { id: generateId(), start: item['start-date'], end: item['end-date'], title: item.title }
      ])
    );
  }, []);

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    const title = prompt('Event Title:');
    if (title) {
      calendarApi.addEvent({
        id: generateId(), // Generate a unique ID for the event
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      clickInfo.event.remove();
    }
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  console.log(events);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height={'80vh'}
        selectable={true} // Enable date selection
        select={handleDateSelect} // Handle date selection
        eventClick={handleEventClick} // Handle event click
      />
    </div>
  );
}

export default Calendar;