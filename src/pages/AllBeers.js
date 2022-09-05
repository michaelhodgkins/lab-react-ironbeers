import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios'
import { Link } from 'react-router-dom';

function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect (() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data)
            setBeers(response.data)
        })

    }, []);


    return (
      <div className="AllBeersList">
        <NavBar />
        <Link to="/">🔙</Link>
        <h1>All Beers</h1>
        <hr>
        </hr>
        {beers.map((beer) => {
            return (
                <div key={beer._id}>
                    <img src={beer.image_url} alt="beer" className='beerSize'></img>
                    <br>
                    </br>
                    <h3>{beer.name}</h3>
                    <p>Tagline: {beer.tagline}</p>
                    <p>Created By: {beer.contributed_by}</p>
                    <Link to="/beers/:beerId"> See Details</Link>
                    <hr>
                    </hr>>
                    <br>
                    </br>
                </div>
            )
        })}
      </div>
    );
  }
   
  export default AllBeers;