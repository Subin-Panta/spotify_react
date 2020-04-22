import React from 'react'
import Card from './Card'

const Main = () => {
return(
    <div className="main">
        <div className="upperNav">
            asdsa        
        </div>
        <div className="mainContent">
            <div className="your fav"><h1>Your Favourites</h1><Card /></div>
            <h1>Trending this week</h1><div className="Trendings"><Card/><Card /><Card/></div>
            <h1>From your favourite artists</h1><div className="Trendings"><Card/><Card/></div>
            
        </div>

    </div>

)
}
export default Main