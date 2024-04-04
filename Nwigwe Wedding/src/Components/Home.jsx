import '../styles/home.css'

export default function Welcome () {
    const Begins = () =>{("Hello!")}

    return (
        <div className="home">
            <img src="../../images/C&A.jpg" id="together"/>
            <h1>Chritian<br/> & <br/> Ameyo </h1>
            <button onClick={Begins} id="button">And so it begins!!</button>
        </div>
    )
}