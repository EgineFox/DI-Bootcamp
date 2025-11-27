import React from "react";
import { useTasks, ACTIONS, FILTERS } from "./TaskProvider";

export default function TaskFilter() {
  const { state, dispatch } = useTasks();

  const setFilter = (filter) => {
    dispatch({ type: ACTIONS.SET_FILTER, payload: { filter } });
  };

  return (
    <div className="row gap">
      <button
        className={`btn ${state.filter === FILTERS.ALL ? "active" : ""}`}
        onClick={() => setFilter(FILTERS.ALL)}
      >
        All
      </button>
      <button
        className={`btn ${state.filter === FILTERS.ACTIVE ? "active" : ""}`}
        onClick={() => setFilter(FILTERS.ACTIVE)}
      >
        Active
      </button>
      <button
        className={`btn ${state.filter === FILTERS.COMPLETED ? "active" : ""}`}
        onClick={() => setFilter(FILTERS.COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
}