import React from 'react';
import { connect } from 'react-redux';
import { setSelectedDate } from '../store/actions';
import { selectSelectedDate } from '../store/selectors';

function DatePicker({ selectedDate, onChangeDate }) {
  return (
    <div>
      <label>
        Дата:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onChangeDate(e.target.value)}
        />
      </label>
    </div>
  );
}

const mapState = (state) => ({
  selectedDate: selectSelectedDate(state)
});

const mapDispatch = (dispatch) => ({
  onChangeDate: (dateStr) => dispatch(setSelectedDate(dateStr))
});

export default connect(mapState, mapDispatch)(DatePicker);
