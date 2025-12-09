export const selectSelectedDate = (state) => state.selectedDate;

export const selectTasksForSelectedDay = (state) => {
  const key = state.selectedDate;
  return state.tasksByDay[key] || [];
};