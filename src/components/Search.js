import React from "react";

const Search = ({input, setInput}) =>{    
    
    return(
        <>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        </>
    )
}

export default Search;