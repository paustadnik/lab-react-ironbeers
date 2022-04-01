import { Link } from "react-router-dom"
import BeersImg from "../assets/beers.png"
import NewBeerImg from "../assets/new-beer.png"
import RandomBeerImg from "../assets/random-beer.png"
import { RandomBeer } from "../routes/RandomBeer"


export function Home() {

  return (
    <div className="homeContainer"> 
      <div className="homeSectionContainer">
        <img src={BeersImg} alt='beer'/>
        <Link to="/beers" className="title"><h2>All Beers</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

      <div className="homeSectionContainer">
        <img src={RandomBeerImg} alt='beer'/>
        <Link to="/random-beer" className="title"element={<RandomBeer />} ><h2>Random Beer</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

      <div className="homeSectionContainer">
        <img src={NewBeerImg} alt='beer'/>
        <Link to="/new-beer" className="title"><h2>New Beer</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

    </div>
  )
}