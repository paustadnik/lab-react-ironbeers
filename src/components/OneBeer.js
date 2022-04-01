export function OneBeer({beer}) {

  return (
    <div>
    <div className="detailBeerInfo">
        <div className="imgContainer">
          <img 
            src={beer.image_url} 
            height={200}
            className="beer__img"
            alt="beer_image"/>
        </div>
        <div className="beerInfoContainer"> 
          <div className="detailTitle">
            <span className="title beerName">{beer.name}</span>
            <span>{beer.attenuation_level}</span>
          </div>
          <div className="detailTitle">
            <span className="beerTagline">{beer.tagline}</span>
            <span>{beer.first_brewed}</span>  
          </div>
          <p>{beer.description}</p>
          <span className="beerCreator">Created by: {beer.contributed_by}</span>
        </div>
      </div>
    </div>
  )
}