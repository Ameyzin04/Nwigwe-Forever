import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function RSVPForm (guest, setGuest) {
    // let {guestId} = useParams()
    const [guestData, setguestData] = useState ("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setguestData({})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    useEffect(() => {
        const getGuests = async () => {
            const response = await axios.get(`http://localhost:8000/api/guests/`)
            console.log(response.data)
            setguestData(response.data)
        }
    getGuests ()    
    
    }, [guest])

    return (
        <div className ="data">
        <div className="top">
            <h1>Your RSVP Response</h1>
            <h2>Add your details</h2>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
            <h3>{guest.first_name}</h3>
            <h3>{guest.last_name}</h3>
            <label><input type= "checkbox" name ="attending" checked={guestData.attending} onChange={handleChange}/>Will Attend</label>
            <label><input type= "checkbox" name ="notattending" checked={guestData.not_attending} onChange={handleChange}/>Will Not Attend</label>
            <label><input type="email" name="email" value={guestData.email} onChange={handleChange}/>Email</label>
            <label><input type="phone" name="phone" value={guestData.phone} onChange={handleChange}/>Phone</label>
            <label><input type="diet" name="diet" value={guestData.dietary_restriction} onChange={handleChange}/>Dietary Restriction</label>


            <button type="submit">Submit RSVP</button>
            </form>



        </div>

        </div>
    )
}