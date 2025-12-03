import React, { useState } from "react";
import Calendar from "./features/Calendar";
import TaskList from "./features/TaskList";
import AddTask from "./features/AddTask";

function App() {
  const [day, setDay] = useState("");

  return (
    <div>
      <h1>Daily Planner</h1>
      <Calendar onDaySelected={setDay} />
      <AddTask day={day} />
      <TaskList day={day} />
    </div>
  );
}

export default App;