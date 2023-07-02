import React, { useState } from 'react';
import styles from './EventList.module.css';
import { Event } from '../models/Event';

interface EventListProps {
    events: Event[];
    onEditEvent: (event: Event) => void;
    onDeleteEvent: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEditEvent, onDeleteEvent }) => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleEditClick = (event: Event) => {
        setSelectedEvent(event);
        setModalOpen(true);
        onEditEvent(event); // Call the onEditEvent prop with the selected event
    };

    const handleDeleteClick = (event: Event) => {
        onDeleteEvent(event); // Call the onDeleteEvent prop with the selected event
    };

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>, eventId: string) => {
        const file = event.target.files?.[0];
        if (file) {
            // Perform the photo upload logic here
            console.log(`Uploading photo for event ${eventId}:`, file);

            // Read the uploaded file and set it as the selected image
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <ul className={styles['event-list']}>
            {events.map(event => (
                <li key={event.id} className={styles['event-list-item']}>
                    <h3 className={styles['event-name']}>{event.name}</h3>
                    <p className={styles['event-info']}>Дата: {event.date}</p>
                    <p className={styles['event-info']}>Местоположение: {event.location}</p>
                    <p className={styles['event-info']}>Описание: {event.description}</p>
                    <div>
                        <button onClick={() => handleEditClick(event)}>Редактировать</button>
                        <button onClick={() => handleDeleteClick(event)}>Удалить</button>
                    </div>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePhotoUpload(e, event.id)}
                        />
                        {selectedImage && <img src={selectedImage} alt="Event" />}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
