import React from 'react';

const EventListItem = (props: any) => {
  const { event } = props;
  return (
    <li className="text-green-500 flex space-x-2 w-1/2 justify-between">
      <div>{event.title}</div>
      <div>{event.date}</div>
    </li>
  );
};

export default EventListItem;
