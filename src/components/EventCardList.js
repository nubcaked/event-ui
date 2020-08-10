import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import './EventCardList.scss';

function EventCardList() {

  const state = useSelector(state => state);
  const events = useSelector(state => state.events.list);
  const msg = useSelector(state => state.msg);

  // const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8080/events?filter[location]=London&filter[category]=animals,art,books,business&filter[date]=2019080100-2020092700&sort=category,-startTime")
  //     .then(res => res.json())
  //     .then(res => { 
  //       console.log(res)
  //       setResponse(res);
  //     },
  //     (error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="cardlist">
      {/* <h1>new state is: {JSON.stringify(state)}</h1>
      <h1>it is: {events != null && (events[0].id)}</h1> */}
      {events != null && events.length !== 0 && (
        events.map((event, index) => (
          // <h1>{data.id}</h1>
          <EventCard key={index} event={event} />
        ))
      )}
    </div>
  );
}

export default EventCardList;
