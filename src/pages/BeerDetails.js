import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function BeerDetails() {
    const [beer, setBeer] = useState([]);
    const { beerId } = useParams();
    console.log(beerId)

    useEffect (() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            console.log(response.data)
            setBeer(response.data)
        })
    }, [beerId]);



    return (
        <div className="AllBeersList">
            <NavBar />
            <Link to="/">🔙</Link>
          <h1>{beer.name}</h1>
             <img src={beer.image_url} alt="beer" className='beerSize'></img>
             <h2>{beer.tagline}</h2>
             <h3>First Brewed: {beer.first_brewed}</h3>
             <h4>Attenuation Level: {beer.attenuation_level}</h4>
             <p>{beer.description}</p>
             <p>Creator: {beer.contributed_by}</p>
        </div>
     
        )}
   
  export default BeerDetails;