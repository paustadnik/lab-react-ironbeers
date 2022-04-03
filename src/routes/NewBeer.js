import { Navigation } from "../components/Navigation";
import { useState } from "react";
import axios from "axios";

export function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDecription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [creator, setCreator] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = 'https://ih-beers-api2.herokuapp.com/beers/new'

    const data = {
      name: name, 
      tagline: tagline, 
      description: description,
      first_brewed: firstBrewed, 
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: creator,
    }

    const beer = await axios.post(url, data)
  }

  return (
    <div>
      <Navigation />
      <form className="newBeerForm" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Tagline
          <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
        </label>

        <label>
          Description
          <textarea type="text" name="description" value={description} onChange={(e) => setDecription(e.target.value)} />
        </label>  

        <label>
          First Brewed
          <input type="text" name="firstBrewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
        </label>

        <label>
          Brewer's Tips
          <input type="text" name="tips" value={tips} onChange={(e) => setTips(e.target.value)} />
        </label>

        <label>
          Attenuation Level
          <input type="number" name="attenuation" value={attenuation} onChange={(e) => setAttenuation(e.target.value)} />
        </label>

        <label>
          Contributed By
          <input  type="text" name="creators" value={creator} onChange={(e) => setCreator(e.target.value)} />
        </label>

        <button type="submit">Add new</button>
      

      </form>
    </div>
  )
}

//onSubmit={}