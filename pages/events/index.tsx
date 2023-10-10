import EventList from '@/components/events/EventList';
import { getAllEvents } from '../../dummy-data';

const EventsIndex = () => {
  return (
    <div>
      <div>All Events</div>
      <EventList events={getAllEvents()} />
    </div>
  );
};

export default EventsIndex;
