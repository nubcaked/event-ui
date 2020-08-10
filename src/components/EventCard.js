import React from 'react';

function EventCard(props) {
  return (
    <div className='cardlist__card'>
      <a href={props.event.url} target='_blank'><b>Title: {props.event.title}</b></a>
      <p>Category: {props.event.category}</p>
      <p>Start Time: {props.event.startTime}</p>
      <p>Stop Time: {props.event.stopTime}</p>
      <p className="cardlist__card--overflow-hidden">{props.event.description}</p>
    </div>
  );
}

export default EventCard;
