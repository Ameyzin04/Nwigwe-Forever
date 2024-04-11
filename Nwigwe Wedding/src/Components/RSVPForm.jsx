import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/rsvpform.css'



export default function RSVPForm ({invited, setInvited}) {
    
    
    console.log(invited)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInvited(prevInvited => ({...prevInvited, [name]:value}))
    };

    const  handleSubmit = async (e) => {
        e.preventDefault()

            const result = await axios.patch(`http://localhost:8000/guests/${invited.id}/`, invited)

            }


    return (
        <div className ="">
        <div className="top">
            <h1>Your RSVP Response</h1>
            <h2>Add your details</h2>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
            <h3>{invited.first_name}</h3>
           <h3>{invited.last_name}</h3>
            <label><input type= "checkbox" name ="attending" checked={invited.attending} onChange={handleChange}/>Will Attend</label>
            <label><input type= "checkbox" name ="notattending"checked={invited.not_attending} onChange={handleChange}/>Will Not Attend</label>
            <label><input type="email" name="email" value={invited.email} onChange={handleChange}/>Email</label>
            <label><input type="phone" name="phone" value={invited.phone} onChange={handleChange}/>Phone</label>
            <label><input type="diet" name="diet" value={invited.dietary_restriction} onChange={handleChange}/>Dietary Restriction</label>


            <button type="submit">Submit RSVP</button>
            </form>



        </div>

        </div>
    )
}