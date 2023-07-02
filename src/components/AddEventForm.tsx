import React, { useState } from 'react';
import styles from './AddEventForm.module.css';

interface AddEventFormProps {
    onAddEvent: (name: string, date: string, location: string, description: string) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onAddEvent }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && date && location && description) {
            onAddEvent(name, date, location, description);
            setName('');
            setDate('');
            setLocation('');
            setDescription('');
        }
    };

    return (
        <form className={styles['add-event-form']} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название плана"
                value={name}
                onChange={e => setName(e.target.value)}
                className={styles['form-input']}
            />
            <input
                type="date"
                placeholder="Время плана"
                value={date}
                onChange={e => setDate(e.target.value)}
                className={styles['form-input']}
            />
            <input
                type="text"
                placeholder="Местоположение плана"
                value={location}
                onChange={e => setLocation(e.target.value)}
                className={styles['form-input']}
            />
            <textarea
                placeholder="Описание плана"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={styles['form-input']}
            />
            <button type="submit" className={styles['form-submit-btn']}>
                Добавить план
            </button>
        </form>
    );
};

export default AddEventForm;
