import { Event } from '../models/Event';

class EventService {
    updateEvent(event: Event) {
        const eventIndex = this.events.findIndex((e) => e.id === event.id);
        if (eventIndex !== -1) {
            this.events[eventIndex] = event;
        }
    }

    deleteEvent(event: Event) {
        const eventIndex = this.events.findIndex((e) => e.id === event.id);
        if (eventIndex !== -1) {
            this.events.splice(eventIndex, 1);
        }
    }

    private events: Event[];

    constructor() {
        this.events = [];
    }

    getAllEvents(): Event[] {
        return this.events;
    }

    addEvent(event: Event): void {
        this.events.push(event);
    }
}

export default EventService;
