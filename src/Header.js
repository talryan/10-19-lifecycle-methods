import { Link} from "react-router-dom";

function Header(props){
    return(
        <div id="header">
            <h1 id="items-page">Shopping</h1>
            <div><Link to="/items"><button>All Items</button></Link></div>
            <div><Link to="/items/new">New Item</Link></div>
            <Link to="/cart"><img alt="Cart" src="https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png"/></Link>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header