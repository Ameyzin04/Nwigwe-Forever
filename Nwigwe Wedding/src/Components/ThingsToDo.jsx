import '../styles/thingstodo.css'
import { IoRestaurantOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";


export default function ThingsToDo () {
    return (
        <div className="things">
            <h1>Things To Do</h1>
            <p>Togo has lots to offer when it comes to food and entertainment.</p>

        <div className="restaurants">
            <h4><IoRestaurantOutline /> Restaurants</h4>
            <ul>
                <li>La Table d'Ahoe</li>
                <li>La Table du DJ</li>
                <li>Le Hangar</li>
                <li>Chez Akissi</li>
                <li>Chez Fatou</li>
                <li>La Huqqa</li>
                <li>Picaso</li>
                <li>Niamele (Hôtel 2 Février)</li>
                <li>La Petite Épicerie</li>
                </ul>            
            </div>  

        <div className="nightLife">
            <h4><BiDrink /> Night Life</h4>
            <ul>
                <li>Zanzibar</li>
                <li>La Villa</li>
                <li>Atmosphère Cigar Lounge</li>
                <li>Le Myth Lounge</li>
                <li>Hype Bar</li>
                <li>Le Phénicien</li>
                </ul>            
            </div> 

        <div className="nightLife">
            <h4><TbBeach /> Beach Please</h4>
            <ul>
                <li>Blue Turtle Bay</li>
                <li>Le Petit Brussel</li>
                <li>Ramatou</li>
                <li>Miadjo</li>
                </ul>            
            </div>  

        <div className="gettingaround">
            <h4><FaCarSide /> Getting Around</h4>
            <p>The easiest way to get around is to download the Gozem application</p>
            <img src="../../images/Gozem.png" id="gozem"/>
        </div>

        </div>
    )
}