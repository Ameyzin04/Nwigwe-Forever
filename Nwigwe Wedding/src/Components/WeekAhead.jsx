import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../styles/weekahead.css'

export default function WeekAhead () {
    let {eventsId} = useParams()
    const [events , setEvents] = useState ([])


    useEffect (() => {
        const getEvents = async () => {
            const response = await axios.get(`http://localhost:8000/api/events/`)
            setEvents(response.data)
        }


        getEvents()
    }, [eventsId]
)

    return (
        <div className="weekAhead">
            <h1> The Week Ahead</h1>
            <h2>Here is the schedule for all events happening the week of our weeding:</h2>
            <ul>
                {events.map(event => 
                <li key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.venue_name}</p>
                </li>
                )}
                </ul>
            </div>
                
                
    )
}