import '../styles/travelandlodging.css'
import { IoBedOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";



export default function TravelandLodging () {
    return (
        <div className="travelandlodging">
            <h1>Travel and Lodging</h1>
            <h2><IoBedOutline/> Lodging</h2>
            <p>We recommend that our guests stay in one of the following hotels:</p>
            <h3>Hôtel Mercure Sarakawa</h3>
            <p>This is the hotel where the reception will take place. The link should take you directly to the discouted room rate. But just in case, the group code is NWIGWE. The cutoff date to book at this rate is November 10,2025</p>
            <a href="https://sarakawa-hotel.com/en/rooms-suites/" className="View"><button className= "see" id="button1">View</button></a>
            <h3>Hôtel 2 Février</h3>
            <p>This hotel is a 20 min drive away from the reception venue. he link should take you directly to the discouted room rate. But just in case, the group code is NWIGWE. The cutoff date to book at this rate is November 10,2025</p>
            <a href="https://2fevrier.com/en/#" className="View"><button className= "see" id="button1">View</button></a>
            <h2><GiCommercialAirplane /> Travel</h2>
            <h4>Aéroport International Gnasimgbé Eyadéma</h4>
            <p>Although Togo is a beautiful country with wonderful and welcoming people, there can sometimes be issues with our customs’ officials. For this reason, we recommend that all our guests arriving by plane pick one of the following dates so we can arrange for someone to meet you and facilitate the immigration process.</p>
            <ul>
                <li>Monday, December 15, 2025</li>
                <li>Tuesday, December 16, 2025</li>
                <li>Wednesday, December 17, 2025</li>
            </ul>
            <p>My sister Selom will be holding a zoom session to help with the visa application. More details to come.</p>
        </div>
    )
}