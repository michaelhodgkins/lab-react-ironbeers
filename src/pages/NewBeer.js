import { useState } from 'react';
import axios from 'axios'

import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");


        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {name, tagline, description, first_brewed, attenuation_level, contributed_by})
                .then(() => {
                    setName("");
                    setTagline("");
                    setDescription("");
                    setFirstBrewed("");
                    setAttenuationLevel(0);
                    setContributedBy("");
                })
                .catch(err => console.log(err))

        }

    return (
        <div className="AddBeer">
            <NavBar />
            <Link to="/">🔙</Link>

            <form onSubmit={handleSubmit}>
             <label>Name: </label>
            <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                />
             <label> Tagline: </label>
             <input 
                type="text"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.currentTarget.value)}
                />

             <label>Description: </label>
             <textarea 
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                />

             <label>First Brewed: </label>
             <input 
                type="text"
                name="first"
                value={first_brewed}
                onChange={(e) => setFirstBrewed(e.currentTarget.value)}
                />
             <label>Attentuation</label>
             <input 
                type="number"
                name="attenuation"
                value={attenuation_level}
                onChange={(e) => setAttenuationLevel(e.currentTarget.value)}
                />
                <label>Contributed By</label>
             <input 
                type="text"
                name="contributed_by"
                value={contributed_by}
                onChange={(e) => setContributedBy(e.currentTarget.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
     
        )}
   
  export default NewBeer;