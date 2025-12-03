import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { addTask } from "./tasksSlice";


function CalendarPicker({ onDaySelected }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (date) => {
    setSelectedDay(date);
    // format date in YYYY-MM-DD for storing in Redux
    const formatted = date.toISOString().split('T')[0];
    onDaySelected(formatted);
  };

  const handleAddTask = () => {
    if (!selectedDay) return;
    const formatted = selectedDay.toISOString().split('T')[0];
    dispatch(addTask({
      day: formatted,
      task: { title: 'New task', description: '' }
    }));
  };

  return (
    <div>
      <h3>Choose a day:</h3>
      <DatePicker
        selected={selectedDay}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Pick a date"
      />
      <button onClick={handleAddTask} disabled={!selectedDay}>
        Add the task
      </button>
    </div>
  );
}

export default CalendarPicker;
