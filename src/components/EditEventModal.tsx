import React, { useState, useEffect } from 'react';
import { Event } from '../models/Event';
import styles from './EventList.module.css';

interface EditEventModalProps {
    event: Event | null;
    onSave: (event: Event) => void;
    onClose: () => void;
}

const EditEventModal: React.FC<EditEventModalProps> = ({ event, onSave, onClose }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (event) {
            setName(event.name);
            setDate(event.date);
            setLocation(event.location);
            setDescription(event.description);
        }
    }, [event]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (event) {
            const updatedEvent: Event = {
                id: event.id,
                name,
                date,
                location,
                description,
            };
            onSave(updatedEvent);
            onClose();
        }
    };

    return (
        <div className={styles['edit-event-modal']}>
            <h2>Редактирование плана</h2>
            <form onSubmit={handleSubmit}>
                <input className={styles['form-input']} type="text" value={name} onChange={e => setName(e.target.value)} />
                <input className={styles['form-input']} type="date" value={date} onChange={e => setDate(e.target.value)} />
                <input className={styles['form-input']} type="text" value={location} onChange={e => setLocation(e.target.value)} />
                <textarea className={styles['form-input']} value={description} onChange={e => setDescription(e.target.value)} />
                <button className={styles['form-submit-btn']} type="submit">Сохранить</button>
                <button className={styles['form-submit-btn']} onClick={onClose}>Отмена</button>
            </form>
        </div>
    );
};

export default EditEventModal;
