import axios from "axios"

import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { OneBeer } from "../components/OneBeer";
import { Beer } from "./Beer";

export function RandomBeer() {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data)
      })
  }, [])
  console.log(beer)

  return (
    <div>
      <Navigation />
      <OneBeer beer={beer}/>

    </div>
  )
}