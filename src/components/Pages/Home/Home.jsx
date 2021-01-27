import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {

    return <div>
        <center> <img src = " https://api.time.com/wp-content/uploads/2019/07/plastic-garbage.jpg" width="900" height="500"></img></center>
    
    
    <br></br>
    <hr></hr>
    <br></br>
    <center> <img src = "https://cdn.akamai.steamstatic.com/steam/apps/382310/capsule_616x353.jpg?t=1611504679 "></img></center>
    <br></br>
    <hr></hr>
    <br></br>
    <center>
        <div className="row">
            <div className="column">
                <Link to='/Electronics/Electronics'>Electronics</Link>
            </div>
            <div className="column">
                <Link to='/Pharma/Pharma'>Pharmaceuticals</Link>
            </div>
            <div className="column">
                <Link to='/Textiles/Textiles'>Textiles</Link>
            </div>
            <div className="column">
                <Link to='/Compost/Compost'>Compost</Link>
            </div>
        </div>
    </center>
    <hr></hr>
    <br></br>
    <br></br>
    <h1> FAQ: </h1>
    </div>

    
}

export default Home;