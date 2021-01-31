import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

    return <div>

        <div class="containerC">

        <img src = "https://images.pexels.com/photos/2850444/pexels-photo-2850444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="1080px" width="1920px"></img>

      
        <div class="text-block1">
          <h1>Keep Your Neighborhood Clean</h1>   
        </div>
       

        <br></br><br></br><br></br><br></br>

        <div class="text-block2">
            <h1>Find Where To Recycle Here</h1>
        </div>

        <img src = "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" height="900px" width="1600px"></img>

        <br></br><br></br><br></br><br></br>
        
        <div class="button1">
             <h1><Link to="/textiles" style = {{color:'white'}}> Clothing</Link> </h1>
        </div>
        <div class="button2">
             <h1><Link to="/compost" style = {{color:'white'}}> Compost</Link> </h1>
        </div>
        <div class="button3">
             <h1><Link to="/pharma" style = {{color:'white'}}> Pharma</Link> </h1>
         </div>
        </div>
   

        <div class="row">
            <div class="column">

      

                <img src = "https://images.pexels.com/photos/5503336/pexels-photo-5503336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="1000px" width="700px"></img>
         </div>
            <div class="column">
                
        
                <img src = "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="1000px" width="700px"></img>
                </div>
            <div class="column">

        
                <img src = "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="1000px" width="700px"></img>
                </div>
        </div>

        <br></br>
        <br></br>

    <center>
        <img src = "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" height="800px" width="1400px"></img>
    </center>

    <div class="button4">
             <h1><Link to="/electronics" style = {{color:'white'}}> Electronics </Link> </h1>
        </div>

    <hr></hr>
    <br></br>
    <center> <h1> FAQ: </h1> </center>
    <hr></hr>
    
</div>

    
}

export default Home;