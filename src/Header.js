function Header(props){
    return(
        <div id="header">
            <h1 id="items-page" onClick={props.changePage}>Shopping</h1>
            <button id="cart-page" onClick={props.changePage}>View Cart</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header