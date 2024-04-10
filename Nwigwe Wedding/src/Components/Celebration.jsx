import '../styles/celebration.css'


export default function Celebration () {
    return (
        <div className="celebration">
            <div className="weddingInfo">
            <h1>Celebration</h1>
            <h3>Saturday, December 20, 2025</h3>
            <h2>Wedding Ceremony</h2>
            <h2>Cathédrale Sacré-Coeur de Lomé</h2>
            <h2>2:30pm</h2>
            <a href="https://maps.app.goo.gl/TGF6mxPxqdDL51DDA" className="Map"><button className= "see" id="button1">Map</button></a>
            </div>
            <div className="receptionInfo">
            <h2>Reception</h2>
            <h2>Hôtel Mercure Sarakawa</h2>
            <h2>5:30pm</h2>
            <a href="https://maps.app.goo.gl/pWMsu1SeTRHzLnB67" className="Map"><button className= "see" id="button1">Map</button></a>

            </div>
        </div>
    )
}