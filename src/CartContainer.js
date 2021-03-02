import React from 'react'

function CartContainer({cart}){

    function showItems(){
       return cart.map(item => {
            return (
                <div key={item.id}>
                    {item.name + item.price}
                </div>
            )
        })
    }
    return(
        <div id="CartContainer">
            {showItems()}
        </div>
    )
}

export default CartContainer