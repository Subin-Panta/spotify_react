import React from 'react'
import {ReactComponent as playIcon} from '../svgs/play.svg'

const Card = ({Subtext,source}) =>{
return(
    <div className="cardsWrap">
        
        <div className="card">
            <div className="cardImage">
                <img src={source}></img>
            </div>
            <div className="cardContent">
                <h3>{Subtext}</h3>
            </div>
            <span className="playIcon">
                <playIcon />

            </span>
        </div>

    </div>
)
}
export default Card