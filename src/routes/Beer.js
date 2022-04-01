import axios from "axios"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { OneBeer } from "../components/OneBeer";

export function Beer() {
  const { id } = useParams()
  const [beer, setBeer] = useState({})

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data)
      })
  }, [])
  console.log(beer)

  return (
    <div>
      <Navigation />
      <OneBeer beer={beer} />
    </div>
  )
}