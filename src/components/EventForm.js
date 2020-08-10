import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import DateSelector from './DateSelector';
import './EventForm.scss';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../store/actions/eventActions';

function EventForm() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null
  });

  function buildQueryParams() {
    let queryParams = [];
    if (categories !== null && categories != '') {
      const categoriesParam = categories.map(category => category.value).join(',');
      queryParams.push('filter[category]=' + categoriesParam);
    }
    if (dates !== null && dates.startDate !== null && dates.endDate !== null) {
      const datesParam = dates.startDate.format('YYYYMMDD00') + '-' + dates.endDate.format('YYYYMMDD00');
      queryParams.push('filter[date]=' + datesParam);
    }
    console.log(queryParams);
    return queryParams;
  }

  return (
    <div>
      <div className="form">
        <CategorySelector onChange={setCategories} categories={categories} />
        <DateSelector onDatesChange={setDates} dates={dates} />
        {/* {categories.length !== 0 && (
          categories.map((category, index) => (
            <p key={index}>{category.value}</p>
          ))
        )} */}
      </div>
      <button className="submit" onClick={() => { dispatch(fetchEvents(buildQueryParams())) }}>Submit</button>
    </div>
  );
}

export default EventForm;
