import React from 'react'

function ItemShow (props) {

    const goBack = (e) => {
        console.log(props)
        props.routeInfo.history.push('/items')
    }

    return (
        <div className="item" id={props.item.id + "-item"}>
            <h3>{props.item.name}</h3>
            <div>
                <img alt={props.item.name + " image"} src={props.item.image1}/>
            </div>
            <div>
                <img alt={props.item.name + " image"} src={props.item.image2}/>
            </div>
            <br/>
            Price: {props.item.price}
            <br/>
            <button onClick={goBack}>BACK</button>
         </div>
    )
}

export default ItemShow