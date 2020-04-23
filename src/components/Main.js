import React from 'react'
import Card from './Card'

const Main = () => {
return(
    <div className="main">
        <div className="upperNav">
            asdsa        
        </div>
        <div className="mainContent">
            <div className="your fav"><h1>Your Favourites</h1><Card Subtext="Top 100 most played" source="https://images.unsplash.com/photo-1474417426737-fbbff0e62ea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/></div>
            <h1>Trending this week</h1><div className="Trendings"><Card  Subtext="Trending in Country" source="https://images.unsplash.com/photo-1500904156668-758cff89dcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/><Card  Subtext="Worldwide" source="https://images.unsplash.com/photo-1501213045308-cfe6e352d850?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80"/><Card Subtext="Rising this Week" source="https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/></div>
            <h1>From your favourite artists</h1><div className="Trendings"><Card Subtext="Eminem" source="https://tonedeaf.thebrag.com/wp-content/uploads/2020/02/Eminem-1-768x435.jpg"/><Card Subtext="AC/DC" source="https://i.ytimg.com/vi/VcByktP-mdE/maxresdefault.jpg"/></div>
            
        </div>

    </div>

)
}
export default Main