import { Link } from 'react-router-dom'


export default function NavBar () {
    return (
        <div className="NavBar">
            <Link to='/'>Home</Link>
           <Link to='/Welcome'>Welcome</Link>
           <Link to='/WeekAhead'>Week Ahead</Link>
           <Link to='/Celebration'>Celebration</Link>
           <Link to='/WeddingParty'>Wedding Party</Link>
           <Link to='/TravelandLodging'>Travel & Lodging</Link>
           <Link to='/ThingsToDo'>Things To Do</Link>
           <Link to='/RSVPPage'>RSVP</Link>
        </div>
    )
}