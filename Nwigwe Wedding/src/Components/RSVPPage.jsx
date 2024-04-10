import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../styles/rsvppage.css'


export default function RSVP () {
    let {guestsId} = useParams()
    let navigate = useNavigate()
    const [guests , setGuests] = useState([])

    useEffect(() => {
    const getGuests = async () => {
        const response = await axios.get(`http://localhost:8000/api/guests/`)
        setGuests (response.data)
    }
getGuests ()    

}, [guestsId])

    return (
        <div className="rsvp">
            <h1>RSVP</h1>
            <p>Please RSVP by October 7, 2025</p>
        
        <div className="rsvpinstruction">
            <p>Please enter your first name as it appears on your "Save the Date" card. If you are responding for you and your guest, you'll be able to add them on the next page</p>
            <input type= "text" placeholder="Enter your First Name" id="box"></input>
            <button onClick={()=> {navigate('/RSVPForm')}} id="button2">Continue</button>
        </div>

        </div>
    )
}