import React from "react";
import "./Search.css";
const Search = ({input, setInput}) =>{    
    
    return(
        <div className="search-bar-wrapper">
        <input
            className="search-bar" 
            value={input} 
            onChange={e=>setInput(e.target.value)}
        />
        </div>
    )
}

export default Search;