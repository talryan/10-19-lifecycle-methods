import React from 'react'

function FilterBar(props){
    return(
        <div id="search-bar">
            Filter: <input onChange={(e) => props.filterItems(e) }></input>
        </div>
    )
}

export default FilterBar
