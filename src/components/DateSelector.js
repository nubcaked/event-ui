import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { useState } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

function DateSelector(props) {

  const [dates, setDates] = useState({
    startDate: null,
    endDate: null
  });

  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="form__selector">
      <h2>Select Date Range:</h2>
      <DateRangePicker
        startDate={props.dates.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={props.dates.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => props.onDatesChange({startDate, endDate})} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
        isOutsideRange={() => false}
      />
    </div>
  );
}

export default DateSelector;
