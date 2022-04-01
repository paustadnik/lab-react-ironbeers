import axios from "axios"

import { Navigation } from "../components/Navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beer } from "./Beer";


export function Beers() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data)
      })
  }, [])

  return (
    <div>
      <Navigation />
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="beerList">
            <div className="imgContainer">
              <img 
                src={beer.image_url} 
                height={100}
                className="beer__img"
                alt="beer_image"/>
            </div>

            <div className="beerInfoContainer"> 
              <Link to={`/beers/${beer._id}`}  element={<Beer beers={beers}/>} className="title beerName"><h3>{beer.name}</h3></Link>
              <span className="beerTagline">{beer.tagline}</span>
              <span className="beerCreator">Created by: {beer.contributed_by}</span>
            </div>
          </div>)
      })}
      
    </div>
  )
}