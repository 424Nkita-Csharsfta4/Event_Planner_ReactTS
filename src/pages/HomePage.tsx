import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';
import EditEventModal from '../components/EditEventModal';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { Event } from '../models/Event';

const HomePage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [events, setEvents] = useState<Event[]>([]); // State to hold the list of events
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const generateUniqueId = (): string => {
        const timestamp = Date.now().toString(36);
        const randomString = Math.random().toString(36).substr(2, 5);
        return `${timestamp}-${randomString}`;
    };

    const handleAddEvent = (name: string, date: string, location: string, description: string) => {
        const newEvent: Event = {
            id: generateUniqueId(),
            name: name,
            date: date,
            location: location,
            description: description,
        };
        setEvents(prevEvents => [...prevEvents, newEvent]);
    };

    const handleEditEvent = (event: Event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    const handleSaveEvent = (updatedEvent: Event) => {
        const updatedEvents = events.map(event => (event.id === updatedEvent.id ? updatedEvent : event));
        setEvents(updatedEvents);
        setSelectedEvent(null);
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
        setModalOpen(false);
    };

    const handleDeleteEvent = (event: Event) => {
        const updatedEvents = events.filter(e => e.id !== event.id);
        setEvents(updatedEvents);
    };

    return (
        <Router>
            <Container>
                <h1>План Событий</h1>
                <Route exact path="/">
                    {isLoggedIn ? (
                        <Redirect to="/event-planner" />
                    ) : (
                        <Route
                            render={props => <LoginForm onLogin={handleLogin} {...props} />}
                        />
                    )}
                </Route>
                <Route path="/register">
                    <RegistrationForm />
                </Route>
                <Route path="/event-planner">
                    {isLoggedIn ? (
                        <>
                            <button onClick={handleLogout}>Выйти</button>
                            <AddEventForm onAddEvent={handleAddEvent} />
                            <EventList
                                events={events}
                                onEditEvent={handleEditEvent}
                                onDeleteEvent={handleDeleteEvent}
                            />
                            {isModalOpen && (
                                <EditEventModal
                                    event={selectedEvent}
                                    onSave={handleSaveEvent}
                                    onClose={handleCloseModal}
                                />
                            )}
                        </>
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
            </Container>
        </Router>
    );
};

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

export default HomePage;
