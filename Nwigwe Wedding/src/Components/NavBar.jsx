import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { useState } from 'react'


export default function NavBar () {

    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <div className="navbar">
        <button onClick={() => setIsOpen((prev) => !prev)}><img src="../../images/Button.png"  id="drop"/>{!isOpen}</button>
        {isOpen && (
        <div className="dropdown">
           <Link to='/'>Home</Link>
           <Link to='/Welcome'>Welcome</Link>
           <Link to='/WeekAhead'>Week Ahead</Link>
           <Link to='/Celebration'>Celebration</Link>
           <Link to='/WeddingParty'>Wedding Party</Link>
           <Link to='/TravelandLodging'>Travel & Lodging</Link>
           <Link to='/ThingsToDo'>Things To Do</Link>
           <Link to='/RSVPPage'>RSVP</Link>
           </div>
           )}

             
        </div>
     
    )
}