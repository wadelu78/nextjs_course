import React from 'react';
import EventListItem from './EventListItem';

const EventList = (props: any) => {
  const { events } = props;
  return (
    <ul>
      {events.map((item: any) => (
        <EventListItem event={item} key={item.id} />
      ))}
    </ul>
  );
};

export default EventList;
