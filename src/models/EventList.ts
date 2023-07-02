import { Event } from '../models/Event';

export default interface EventListProps {
    events: Event[];
    onEditEvent: (event: Event) => void;
    onDeleteEvent: (event: Event) => void;
}
