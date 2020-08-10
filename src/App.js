import React from 'react';
import './App.scss';
import EventForm from './components/EventForm';
import EventCardList from './components/EventCardList';

function App() {
  return (
    <div className="App">
      <h1>Check for events happening in London</h1>
      <EventForm />
      <EventCardList />
    </div>
  );
}

export default App;
