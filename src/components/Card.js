import React from 'react'
import {ReactComponent as playIcon} from '../svgs/play.svg'

const Card = () =>{
return(
    <div className="cardsWrap">
        <h1>Your favourites</h1>
        <div className="card">
            <div className="cardImage">
                <img src="https://images.unsplash.com/photo-1474417426737-fbbff0e62ea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"></img>
            </div>
            <div className="cardContent">
              <h3>Top 100 most Played</h3>
            </div>
            <span className="playIcon">
                <playIcon />

            </span>
        </div>

    </div>
)
}
export default Card