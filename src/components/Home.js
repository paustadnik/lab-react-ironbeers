import { Link } from "react-router-dom"
import Beers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"
import { Navigation } from "./Navigation"

export function Home() {
  return (
    
    <div className="homeContainer"> 
      <div className="homeSectionContainer">
        <img src={Beers}/>
        <Link to="/beers" className="title"><h2>All Beers</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

      <div className="homeSectionContainer">
        <img src={RandomBeer}/>
        <Link to="/random-beer" className="title"><h2>Random Beer</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

      <div className="homeSectionContainer">
        <img src={NewBeer}/>
        <Link to="/new-beer" className="title"><h2>New Beer</h2></Link>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div> 

    </div>
  )
}