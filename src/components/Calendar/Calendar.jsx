import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

function Calendar() {
  const [events, setEvents] = useState([]);
  const Challenges = JSON.parse(localStorage.getItem('challenges'));

  useEffect(() => {
    const tempArr = Challenges?.map(item => ({
      start: item['start-date'],
      end: item['end-date'],
      title: item.title,
      isOpened: item.isOpen,
      color: getColor(item['start-date'], item['end-date'], item.isOpen)
    }));

    setEvents([...tempArr]);
  }, []);

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    const title = prompt('Event Title:');

    if (title) {
      calendarApi.addEvent({
        id: generateId(),
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

  const getColor = (start, end, isOpen) => {
    const currentDate = new Date().toISOString().split('T')[0];

    if (isOpen) {
      if (start <= currentDate && currentDate <= end) {
        return 'green'; // Current event
      } else if (eventEndDate < currentDate) {
        return 'red'; // Passed event
      }
    }
    return 'blue'; // Future event
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

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
        events={events}
        height={'90vh'}
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default Calendar;