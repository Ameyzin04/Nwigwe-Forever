import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../styles/rsvppage.css'


export default function RSVP () {
   
    let navigate = useNavigate()
    const [guests , setGuests] = useState("")
    const [ guestName, setGuestName] = useState("")
    const [formName, setFormName] = useState("")

    useEffect(() => {
    const getGuests = async () => {
        const response = await axios.get(`http://localhost:8000/api/guests/`)
        setGuests(response.data)
        console.log(response.data)
    }
getGuests()    

}, [])
        const handleChange = (e) => {
            const name = e.target.value;
            setFormName(name)
            console.log(formName)

        };
    
        const handleSubmit = (e) => {
            e.preventDefault()
            setGuestName(formName)
            console.log(guestName)
            const found = guests.find((guest) => guest.first_name === e.target.name.value)   

            console.log(found)

            navigate ('/RSVPForm')
        };

        
    
    return (
        <div className="rsvp">
            <h1>RSVP</h1>
            <p>Please RSVP by October 7, 2025</p>
        
        <div className="rsvpinstruction">
            <form onSubmit={handleSubmit}>
            <p>Please enter your first name as it appears on your "Save the Date" card. If you are responding for you and your guest, you'll be able to add them on the next page</p>
            <input name="name" onChange={handleChange} type= "text" placeholder="Enter your First Name" id="box"></input>
            <button type="submit" id="button2">Continue</button>
            </form>
        </div>

        </div>
    )
}